//===============================================================================
//--------- Definições de missões
//===============================================================================
function Mission(name,info,goal,min,sec){
	this.name=name;
	this.info=info;
	this.goal=goal;
	this.min=min;
	this.sec=sec;
}

MISSION=[
			 new Mission("Tester","Software de Teste",50,0,20),
			 new Mission("Missão 1","Software de Padaria",5000,0,30),
			 new Mission("Missão 2","Software de Supermercado",10000,0,50)
		];

function createButton(context,classe,func,innerHTML){
    var button = document.createElement("button");
    button.type = "button";
    button.setAttribute('onclick',func);
    button.className = classe;
    button.innerHTML=innerHTML;
    context.appendChild(button);
}


function createMissions(){
	var list = document.getElementById("missao").getElementsByTagName('li')[0];
	for (var i = 0; i < MISSION.length; i++) {
        m = MISSION[i];
        var innerHTML=
   		"<span style='text-decoration: underline; font-weight: bold;'>"+m.name+":</span><br>"+
        "<small><span style='text-decoration: underline;'>"+m.info+"</span><br>"+
        "<span style='text-decoration: underline;'>Orçamento Requerido:</span>$"+m.goal+"<br>"+
        "<span style='text-decoration: underline;'>Tempo:</span>"+get_clock(get_ms(m.min,m.sec))+" minutos</small><br>";

        createButton(list,"b_list","menu('game','"+i+"')",innerHTML);

	}
}

//===============================================================================
//===============================================================================
//--------- Definições de upgrades
//===============================================================================
function Upgrade(increment,automoney,cost,questions){
	this.increment=increment;
	this.automoney=automoney;
	this.cost=cost;
	this.questions=questions;
}

var Estagiario= new Upgrade(1,0,10,["fundamentos","estagiario"]);

var Programador= new Upgrade(2,0,20,["fundamentos","programador"]);

var Analista= new Upgrade(2,0,20,["analista"]);

var CMMI2= new Upgrade(10,0,200,["cmmi2"]);

var CMMI3= new Upgrade(20,0,300,["cmmi3"]);

var CMMI4= new Upgrade(30,0,400,["cmmi4"]);

var CMMI5= new Upgrade(40,0,500,["cmmi5"]);

function txt2upgrade(txt){
	switch(txt) {
    case "estagiario": return Estagiario;
    case "programador": return Programador;
    case "analista": return Analista;
    case "cmmi2": return CMMI2;
    case "cmmi3": return CMMI3;
    case "cmmi4": return CMMI4;
    case "cmmi5": return CMMI5;
    default:return Estagiario;
	}	 
}


//===============================================================================

//Mostra uma tela
function show(id) {
	document.getElementById("missao").style.display = 'none';
	document.getElementById("start").style.display = 'none';
    document.getElementById("game").style.display = 'none';
    document.getElementById("certificados").style.display = 'none';
    document.getElementById("funcionarios").style.display = 'none';
    document.getElementById("question").style.display = 'none';
    if(id=="voltar")id="game";
    document.getElementById(id).style.display = 'block';
}

//Compra um upgrade
function comprar(x){	

	Clicker.curr_buy=txt2upgrade(x);

	if((Clicker.money-Clicker.curr_buy.cost)<0)alert("Não tem dinheiro suficiente");
	else {
		Clicker.money-=Clicker.curr_buy.cost;
		q=Clicker.curr_buy.questions;
		i=Math.floor((Math.random() * q.length)); 
		menu("question",q[i]);
	}
}

//Ganha o upgrade após pergunta certa
function ganhar(){
	Clicker.automoney+=Clicker.curr_buy.automoney;
	Clicker.increment+=Clicker.curr_buy.increment;
}




function loadXMLDoc(filename){
if (window.XMLHttpRequest)  {
  xhttp=new XMLHttpRequest();
  }
else{ // code for IE5 and IE6    
  xhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xhttp.open("GET",filename,false);
xhttp.send();
return xhttp.responseXML;
} 

function clearop(){
	var x;
	for (var i = 0; i < 4; i++) {
    		x = Clicker.ALT[i];
    		x.style.background="transparent";
    		x.style.display = 'none';
  		}
}

function check(op){
	var x;

	x=Clicker.ALT[op];

	q=Clicker.curr_question;
	alt= q.getElementsByTagName("alt");
    istrue=alt[op].attributes.getNamedItem("is").nodeValue=="T";

	if(istrue) {x.style.background="green";
				ganhar();}
	else {x.style.background="red";}
	
	Clicker.wait=500;
	Clicker.wait_callback="checked";
}

function setQuestion(type){
	t=Clicker.QFile.getElementsByTagName(type);
	x=t[0].getElementsByTagName("question");
	i=Math.floor((Math.random() * x.length)); 
	q=x[i];
	Clicker.curr_question=q;
	txt=q.getElementsByTagName("txt")[0].childNodes[0].nodeValue;
	document.getElementById("qtext").innerHTML = txt;
	alt= q.getElementsByTagName("alt");

	for (var i = 0; i < 4; i++) {
    		a = Clicker.ALT[i];
    		a.innerHTML=alt[i].childNodes[0].nodeValue;
    		a.style.display = 'block';
  		}
}

function menu(op,type){
	if(op=="question")setQuestion(type);
	else if(op=="game")Clicker.init(type);

	show(op);
}

function format2(n){
    return n > 9 ? "" + n: "0" + n;
}
function get_clock(ms) {
    hours = format2(Math.floor(ms / 3600000));// 1 Hour = 36000 Milliseconds
    minutes = format2(Math.floor((ms % 3600000) / 60000)); // 1 Minutes = 60000 Milliseconds
    seconds = format2(Math.floor(((ms % 360000) % 60000) / 1000)); // 1 Second = 1000 Milliseconds
    clock = minutes + ":" + seconds;
    return clock;
}
function get_ms(minutes,seconds){
	return minutes*60000 + seconds*1000;
}
            
var Clicker={}

Clicker.init=function(mission){
	M = MISSION[mission];//Define qual missao é essa.
	Clicker.active=true;
	Clicker.wait=0;
	Clicker.wait_callback=null;
	//---------------------------------------------------------------
	Clicker.time=new Date().getTime();
	Clicker.fpsMeasure=new Date().getTime();
	Clicker.accumulatedDelay=0;
	Clicker.fps=30;//Frames por segundo
	//---------------------------------------------------------------
	Clicker.money=0;
	Clicker.automoney=0;
	Clicker.increment=1;
	Clicker.CMMI=0;
	Clicker.lastClick=0;
	Clicker.timer=document.getElementById("timer");
	Clicker.timert=get_ms(M.min,M.sec);
	Clicker.timer.innerHTML= get_clock(Clicker.timert);
	Clicker.goal = M.goal;
	//---------------------------------------------------------------
	Clicker.QFile=loadXMLDoc("questions.xml");
	Clicker.curr_question="";
	Clicker.ALT = [document.getElementById("alt1"),document.getElementById("alt2"),document.getElementById("alt3"),document.getElementById("alt4")];
	clearop();
	//---------------------------------------------------------------
	Clicker.click=function(event){
			if (event) event.preventDefault();
			if (new Date().getTime()-Clicker.lastClick<1000/250){}
			else Clicker.earn(Clicker.increment);
			
		}

	Clicker.earn=function(x){
		Clicker.money+=x;
	}

	Clicker.spend=function(x){
		Clicker.money-=x;
	}

	Clicker.sleep =function(milliseconds) {
  		var start = new Date().getTime();
  		for (var i = 0; i < 1e7; i++) {
    		if ((new Date().getTime() - start) > milliseconds)break;
  		}
	}	

	Clicker.popup=function(x){
		Clicker.popuptime=0;
    	Clicker.mypopup.innerHTML=x;
	}
	Clicker.loop();
}

Clicker.draw=function(){
		document.getElementById("counter").innerHTML= Clicker.money.toFixed(2);
		Clicker.timer.innerHTML= get_clock(Clicker.timert);
	}

Clicker.latency=function(){
		Clicker.accumulatedDelay+=((new Date().getTime()-Clicker.time)-1000/Clicker.fps);
		Clicker.accumulatedDelay=Math.min(Clicker.accumulatedDelay,1000*5);//don't compensate over 5 seconds; if you do, something's probably very wrong
		Clicker.time=new Date().getTime();
		while (Clicker.accumulatedDelay>0){
			Clicker.accumulatedDelay-=1000/Clicker.fps;
		}
}

Clicker.loop=function()	{
			Clicker.update();
			if(Clicker.active==false)return;
			Clicker.latency();		
			Clicker.draw();		
			setTimeout(Clicker.loop,1000/Clicker.fps);
	}

Clicker.update=function(){
	/*if(Clicker.mypopup.innerHTML!=''){
		Clicker.popuptime+=1000/Clicker.fps;
		if(Clicker.popuptime>=5000){
			Clicker.popup('');
		}
	}*/

	if(Clicker.wait>0){
		Clicker.wait-=1000/Clicker.fps;
		if(Clicker.wait<=0){
			if(Clicker.wait_callback=="checked"){clearop();show("game");}
		}
	}
	if(Clicker.timer.innerHTML!=get_clock(0)){
		Clicker.timert-=1000/Clicker.fps;		
	}
	else{
		alert("Tempo acabou");
		Clicker.active=false;
		menu("missao");
		return;
	}
	Clicker.earn(Clicker.automoney/Clicker.fps);
}