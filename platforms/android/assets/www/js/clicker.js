//===============================================================================
//--------- Definições de missões
//===============================================================================
var auxHolder=null;
function Mission(name,info,goal,click,min,sec,upgrades){
	this.name=name;
	this.info=info;
	this.click=click;
	this.goal=goal;
	this.min=min;
	this.sec=sec;
	this.upgrades=upgrades
	this.done=true;//Teste
}
function Upgrade(name,op,increment,cost,questions,info,limit){
	this.name=name;
	this.op=op;
	this.increment=increment;
	this.automoney=0;
	this.cost=cost;
	this.questions=questions;
	this.n=0;
	this.info=info;
	this.limit=limit;
}

MISSION=[

				
			new Mission(
			 	"Software para debug - SoftDebug",
			 	"Os desenvolvedores do SoftClicker precisam realizar testes de vez em quando!",
			 	100,
			 	1,//Click
			 	0,
			 	30,
			 	[ new Upgrade("Contratar um estagiário","+",10,60,["fundamentos"],"A contratação de um estagiário para fazer tarefas simples, em um software de baixo risco, em que correções futuras podem ser feitas sem danos maiores, é uma boa escolha. Esse pode executar tarefas de execução direta, ou até mesmo realizar algumas tarefas de conferência de requisitos.",1),
			 	  new Upgrade("Fazer um protótipo funcional","+",8,15,["fundamentos"],"O seu Manuel ficou feliz com a apresentação visual de seu software! Na disciplina de engenharia de software, é sabido que a construção da Interface Gráfica requer um esforço muito grande. Se esforce para produzir a melhor interface possível.",1),
			 	  new Upgrade("Contratar um testador de software","+",10,15,["fundamentos"],"O testador ficará responsável por inicialmente criar os testes, e depois executa-los. É responsabilidade do testador entregar um produto satisfatório e funcional ao cliente",1)
			 	]
			 	),

			 new Mission(
			 	"Software para padaria - SoftPão",
			 	"O Seu Manuel dono da padaria te ligou. Seu objetivo é desenvolver um sistema de controle para o Seu Manuel. Os requisitos, de acordo com ele, são: Manter controle de estoque de ingredientes e de produtos, controle de fluxo de caixa e administração de fornecedores. O sistema deve executar em um computador simples, usando o Sistema Operacional Doors, e utilizar um SGBD leve, como o YourSQL ou o SQLeve.",
			 	1000,
			 	1,//Click
			 	3,
			 	0,
			 	[ new Upgrade("Contratar um estagiário","+",10,60,["fundamentos"],"A contratação de um estagiário para fazer tarefas simples, em um software de baixo risco, em que correções futuras podem ser feitas sem danos maiores, é uma boa escolha. Esse pode executar tarefas de execução direta, ou até mesmo realizar algumas tarefas de conferência de requisitos.",1),
			 	  new Upgrade("Fazer um protótipo funcional","+",8,15,["fundamentos"],"O seu Manuel ficou feliz com a apresentação visual de seu software! Na disciplina de engenharia de software, é sabido que a construção da Interface Gráfica requer um esforço muito grande. Se esforce para produzir a melhor interface possível.",1),
			 	  new Upgrade("Contratar um testador de software","+",10,15,["fundamentos"],"O testador ficará responsável por inicialmente criar os testes, e depois executa-los. É responsabilidade do testador entregar um produto satisfatório e funcional ao cliente",1)
			 	]
			 	),


			new Mission(
			 	"Jogo para smartphone multiplataforma - Angry Manager",
			 	"Querendo aproveitar toda a nova onda de jogos móveis, você decide que é hora de lançar o próximo grande sucesso, o Angry Manager. No jogo você deverá gerenciar e controlar uma fábrica de software que vive no caos, sem cumprimento de prazos acordados com o cliente, sem metodologia de trabalho etc. O jogo deverá ser executado nas plataformas aOS, Robo e Doors Phone e deve ser simples o suficiente para qualquer um poder jogar. Além disso, o design tem um papel fundamental aqui. Logo, deverão ser contratados artistas.",
			 	3000,
			 	1,//Click
			 	4,
			 	0,
			 	[ new Upgrade("Estagiário","+",1,50,["fundamentos"],"A contratação de um estagiário pode comprometer um projeto se ele for de altíssimo risco, inadiável e sigiloso. Desenvolver um projeto dessa natureza demanda uma equipe altamente qualificada e certificada. Esteja ciente de que você possa ser prejudicado na execução do projeto devido à escolha.",5),
			 	  new Upgrade("Programador","+",20,100,["fundamentos"],"Preocupe-se em treinar os programadores para que eles possam compreender as metas e objetivos organizacionais a fim de aplicá-los aos softwares desenvolvidos.",10),
			 	  new Upgrade("Analista de Requisitos","+",30,200,["fundamentos"],"O Analista de Requisitos é peça fundamental na criação do produto que se transformará no software. Ele transmite à equipe de desenvolvimento o que foi relatado pela parte que encomendou o software e outros detalhes mapeados por observações e entrevistas. Ele deve traduzir as diversas perspectivas em uma especificação e manter o elo entre todos os interessados.",1),
			 	  new Upgrade("Testador","+",40,300,["fundamentos"],"O Analista de Teste é responsável por inicialmente identificar e posteriormente definir os testes necessários, monitorar a abrangência dos testes e avaliar o resultado dos testes conduzidos em cada ciclo de teste. É de suma importância a tarefa do analista de teste na entrega de um produto satisfatório e integralmente funcionável ao cliente.",1),
			 	  new Upgrade("Designer","+",50,400,["fundamentos"],"O projetista é encarregado de transformar os resultados da análise de requisitos em um documento capaz de ser interpretado pelo programador. Ele mapeia as estruturas e funcionalidades identificadas na análise de requerimentos dentro do contexto e das restrições da arquitetura, de forma a tornar possível a construção do software.",1)
			 	]
			 	),

			new Mission(
			 	"Software de planilhas eletrônicas - Ekicel",
			 	"Não importa o quão simples ficam as interfaces, sempre existe a necessidade de se produzir softwares para produtividade em grandes empresas. Por isso, é hora de desenvolver a próxima geração de software para controle de planilhas eletrônicas. Você deverá construir o Ekicel, a nova geração de planilhas. Como requisitos, ele deve ser open source, executar no sistemas operacionais Línukis, Doors e Pineapple. Além disso, ele deve ser suficientemente poderoso e simples de usar, para que qualquer empresa possa adotá-lo nos seus processos.",
			 	5000,
			 	1,//Click
			 	5,
			 	0,
			 	[ new Upgrade("Estagiário","+",1,50,["fundamentos"],"A contratação de um estagiário pode comprometer um projeto se ele for de altíssimo risco, inadiável e sigiloso. Desenvolver um projeto dessa natureza demanda uma equipe altamente qualificada e certificada. Esteja ciente de que você possa ser prejudicado na execução do projeto devido à escolha.",5),
			 	  new Upgrade("Programador","+",20,100,["fundamentos"],"Preocupe-se em treinar os programadores para que eles possam compreender as metas e objetivos organizacionais a fim de aplicá-los aos softwares desenvolvidos.",10),
			 	  new Upgrade("Gerente de Projeto","+",30,200,["fundamentos"],"O gerente de projetos tem a responsabilidade de planejar e controlar a execução de projetos. Ele planeja e coordena o desenvolvimento do projeto colhendo métricas, suprindo necessidades, recrutando recursos adequados e mantendo o foco na meta de projeto, além de estar sempre alerta, mas não avesso a mudanças. Seu gerente de projeto deve apresentar qualidades de organização, liderança, facilidade de comunicação, poder de negociação, gestão de crise, tomada de soluções, atitude diante dos riscos e persistência para gerir de forma satisfatória o seu projeto.",2),
			 	  new Upgrade("Analista de Requisitos","+",30,200,["fundamentos"],"O Analista de Requisitos é peça fundamental na criação do produto que se transformará no software. Ele transmite à equipe de desenvolvimento o que foi relatado pela parte que encomendou o software e outros detalhes mapeados por observações e entrevistas. Ele deve traduzir as diversas perspectivas em uma especificação e manter o elo entre todos os interessados.",1),
			 	  new Upgrade("Analista de Teste","+",30,200,["fundamentos"],"O Analista de Teste é responsável por inicialmente identificar e posteriormente definir os testes necessários, monitorar a abrangência dos testes e avaliar o resultado dos testes conduzidos em cada ciclo de teste. É de suma importância a tarefa do analista de teste na entrega de um produto satisfatório e integralmente funcionável ao cliente.",1),
			 	  new Upgrade("Desenhista/Projetista de Software","+",30,200,["fundamentos"],"O projetista é encarregado de transformar os resultados da análise de requisitos em um documento capaz de ser interpretado pelo programador. Ele mapeia as estruturas e funcionalidades identificadas na análise de requerimentos dentro do contexto e das restrições da arquitetura, de forma a tornar possível a construção do software.",1),
			 	  new Upgrade("Engenheiro de Qualidade","+",50,500,["fundamentos"],"A qualidade do produto está diretamente relacionada à qualidade do processo de desenvolvimento. Então, é comum que a busca por um software de maior qualidade passe necessariamente por uma melhoria no processo de desenvolvimento. O seu engenheiro de qualidade ajudará a garantir a qualidade do software através da definição e normatização de processos de desenvolvimento, a fim de garantir um produto final que satisfaça às expectativas do cliente, dentro daquilo que foi acordado inicialmente.",1)
			 	]
			 	)
		];



function createButton(context,classe,id,func,innerHTML,disabled){
	disabled = typeof disabled !== 'undefined' ? disabled : false;

    var button = document.createElement("button");
    button.id=id;
    button.type = "button";
    button.setAttribute('onclick',func);
    button.className = classe;
    button.disabled = disabled;
    button.innerHTML=innerHTML;
    context.appendChild(button);
}

function updateMissions(){
	var b = document.getElementById("missao").getElementsByTagName('button');

	for (var i = 0; i < MISSION.length; i++) {

		if(i>0 && MISSION[i-1].done==false){
				b[i].disabled=true;
			}
		else {b[i].disabled=false;}

	}
}

function createMissions(){
	var list = document.getElementById("missao").getElementsByTagName('li')[0];
	for (var i = 0; i < MISSION.length; i++) {
        m = MISSION[i];
        var innerHTML=
   		"<span style='text-decoration: underline; font-weight: bold;'>"+m.name+"</span><br>";

        createButton(list,"b_list",m.name,"menu('minfo','"+i+"')",innerHTML);

	}

	updateMissions();
}


function updateVisible(type){
	var b = document.getElementById(type).getElementsByTagName('button');
	var V = Clicker.M.upgrades;
	for (var i = 0; i < V.length; i++) {
		if((Clicker.money-V[i].cost)<0 || V[i].n>=V[i].limit){b[i].disabled=true;}
		else {b[i].disabled=false;}

	}
}


function clearUpgrades(){
	var list = document.getElementById("upgrades").getElementsByTagName('li')[0];
	var but = list.getElementsByTagName('button');
	while(but.length>0){
		but[0].parentNode.removeChild(but[0]);
		var but = list.getElementsByTagName('button');
	}

}

function createUpgrades(L){
	var list = document.getElementById("upgrades").getElementsByTagName('li')[0];
	for (var i = 0; i < L.length; i++) {
        m = L[i];
        var innerHTML=
   		"<span style='text-decoration: underline; font-weight: bold;'>"+m.name+":</span><br>"+
        "<small><span style='text-decoration: underline;'>Custo: $"+m.cost+"</span><br>"+
        "<span style='text-decoration: underline;'>Quantidade já adquirida: </span>"+m.n+"/"+m.limit+"<br>";

        createButton(list,"b_list",m.name,"comprar('"+m.name+"')",innerHTML);

	}
}

function updateInfo(m){
	var b = document.getElementById(m.name);
	var innerHTML=
   		"<span style='text-decoration: underline; font-weight: bold;'>"+m.name+":</span><br>"+
        "<small><span style='text-decoration: underline;'>Custo: $"+m.cost+"</span><br>"+
        "<span style='text-decoration: underline;'>Quantidade já adquirida: </span>"+m.n+"/"+m.limit+"<br>";
    b.innerHTML=innerHTML;
}

//Compra um upgrade
function comprar(x){
	if(Clicker.curr_buy!=null){return;}

	var up = Clicker.M.upgrades;
	var n = 0;
	for (var j = 0; j < up.length; j++){
        if (up[j].name == x){
        	n = j;
        	break;
        }
    }
	Clicker.curr_buy=up[n];

	if((Clicker.money-Clicker.curr_buy.cost)<0){}
	else {
		Clicker.money-=Clicker.curr_buy.cost;
		q=Clicker.curr_buy.questions;
		var i=Math.floor((Math.random() * q.length)); 
		menu("question",q[i]);
	}
}

//Ganha o upgrade após pergunta certa
function ganhar(){
	Clicker.automoney+=Clicker.curr_buy.automoney;	
	Clicker.curr_buy.n+=1;
	op = Clicker.curr_buy.op
	if(op=="+") Clicker.increment+=Clicker.curr_buy.increment;
	else if(op=="*") Clicker.increment*=Clicker.curr_buy.increment;
	else if(op=="-") Clicker.increment-=Clicker.curr_buy.increment;
	else if(op=="/") Clicker.increment/=Clicker.curr_buy.increment;

	updateInfo(Clicker.curr_buy);
}

//===============================================================================
//===============================================================================
//--------- Definições de tela
//===============================================================================

//Mostra uma tela
function show(id) {
	document.getElementById("missao").style.display = 'none';
	document.getElementById("start").style.display = 'none';
    document.getElementById("game").style.display = 'none';
    document.getElementById("minfo").style.display = 'none';
    document.getElementById("upgrades").style.display = 'none';
    document.getElementById("question").style.display = 'none';
    if(id=="voltar")id="game";
    document.getElementById(id).style.display = 'block';
}

//===============================================================================
//===============================================================================
//--------- Definições de Criação e Avaliação de Questões
//===============================================================================
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
				ganhar();
				alert(Clicker.curr_buy.info);}
	else {x.style.background="red";}

	
	Clicker.curr_buy=null;
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

function setMinfo(){
	s = document.getElementById("minfobox");
	m = MISSION[auxHolder];
	s.innerHTML = 
	"<font size='4'>"+
   	"<p style='text-decoration: underline;'>"+m.name+"</p><br>"+
    "<p style='text-decoration: underline;'>Orçamento Requerido:</p>$"+m.goal+"<br>"+
    "<p style='text-decoration: underline;'>Tempo:</p><p>"+get_clock(get_ms(m.min,m.sec))+" minutos</p><br>"+
    "<p>"+m.info+"</p><br>"+
    "</font>";

}

function menu(op,type){
	show(op);
	if(op=="start"){
		createMissions();
	}
	if(op=="question"){setQuestion(type);}
	else if(op=="minfo"){auxHolder=type;
		setMinfo();
	}
	else if(op=="game"){Clicker.init(auxHolder);}
	else if(op=="upgrades" || op=="certificados"){updateVisible(op);}
	
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

//===============================================================================
//===============================================================================
//--------- Definições do Clicker
//===============================================================================
            
var Clicker={}

Clicker.init=function(mission){
	Clicker.M = MISSION[mission];//Define qual missao é essa.
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
	Clicker.increment=Clicker.M.click;
	Clicker.lastClick=0;
	Clicker.curr_buy=null;
	Clicker.timer=document.getElementById("timer");
	Clicker.timert=get_ms(Clicker.M.min,Clicker.M.sec);
	Clicker.timer.innerHTML= get_clock(Clicker.timert);
	Clicker.goal = Clicker.M.goal;
	//---------------------------------------------------------------
	Clicker.QFile=loadXMLDoc("questions.xml");
	Clicker.curr_question="";
	Clicker.ALT = [document.getElementById("alt1"),document.getElementById("alt2"),document.getElementById("alt3"),document.getElementById("alt4")];
	clearop();
	clearUpgrades();
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
	createUpgrades(Clicker.M.upgrades);
	Clicker.loop();
}

Clicker.draw=function(){
		counter = document.getElementById("counter");
		counter.innerHTML= Clicker.money.toFixed(2);
		Clicker.timer.innerHTML= get_clock(Clicker.timert);

		if(Clicker.money<Clicker.M.goal){
		counter.style.color="red";
		}
		else{
			counter.style.color="green";
		}
		
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
			if(Clicker.active==false){return;}
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

		if(Clicker.money<Clicker.M.goal){
			alert("O tempo acabou\nQue Pena! Você não completou a missão!");
		}
		else{
			alert("O tempo acabou\nParabéns! Você venceu a missão!");
		}

		//FAZER GANHOU OU PERDEU!
		Clicker.active=false;
		menu("missao");
		return;
	}
	Clicker.earn(Clicker.automoney/Clicker.fps);
}