var Estagiario={}
Estagiario.increment=1;
Estagiario.cost=10;

var Programador={}
Programador.increment=2;
Programador.cost=20;

var Analista={}
Analista.increment=3;
Analista.cost=30;

var CMMI2={}
CMMI2.increment=10;
CMMI2.cost=200;

var CMMI3={}
CMMI3.increment=20;
CMMI3.cost=300;

var CMMI4={}
CMMI4.increment=30;
CMMI4.cost=400;

var CMMI5={}
CMMI5.increment=40;
CMMI5.cost=500;

function comprar(x){
	

	if(x=="estagiario") v=Estagiario;
	else if(x=="programador") v=Programador;
	else if(x=="analista") v=Analista;
	else if(x=="cmmi2") v=CMMI2;
	else if(x=="cmmi3") v=CMMI3;
	else if(x=="cmmi4") v=CMMI4;
	else if(x=="cmmi5") v=CMMI5;

	Clicker.curr_buy=v;

	if((Clicker.money-v.cost)<0)alert("Não tem dinheiro suficiente");
	else {
		Clicker.money-=v.cost;
		menu("question",x);
	}
}

function ganhar(){
	v=Clicker.curr_buy;
	Clicker.automoney+=v.increment;
}

//===============================================================================

function game(){
	show("start");
}

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
	x1=document.getElementById("alt1");
	x2=document.getElementById("alt2");
	x3=document.getElementById("alt3");
	x4=document.getElementById("alt4");

	x1.style.background="transparent";
	x2.style.background="transparent";
	x3.style.background="transparent";
	x4.style.background="transparent";
}

function check(op){
	var x;
	if(op==0) {x=document.getElementById("alt1");}
	else if(op==1) {x=document.getElementById("alt2");}
	else if(op==2) {x=document.getElementById("alt3");}
	else {x=document.getElementById("alt4");}

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
	document.getElementById("alt1").innerHTML =alt[0].childNodes[0].nodeValue;
	document.getElementById("alt2").innerHTML =alt[1].childNodes[0].nodeValue;
	document.getElementById("alt3").innerHTML =alt[2].childNodes[0].nodeValue;
	document.getElementById("alt4").innerHTML =alt[3].childNodes[0].nodeValue;
}

function menu(op,type){
	show(op)
	if(op=="question")setQuestion(type);
	else if(op=="game")Clicker.init();
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
            
var Clicker={}

Clicker.init=function(){
	Clicker.wait=0;
	Clicker.wait_callback=null;
	//---------------------------------------------------------------
	Clicker.time=new Date().getTime();
	Clicker.fpsMeasure=new Date().getTime();
	Clicker.accumulatedDelay=0;
	Clicker.fps=30;//Frames por segundo
	Clicker.QFile=loadXMLDoc("questions.xml");
	//---------------------------------------------------------------
	Clicker.money=0;
	Clicker.automoney=0;
	Clicker.increment=1;
	Clicker.CMMI=0;
	Clicker.lastClick=0;
	Clicker.timer=document.getElementById("timer");
	Clicker.timert=300000;
	Clicker.curr_question="";
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
	Clicker.earn(Clicker.automoney/Clicker.fps);
}