function game(){
	Clicker.init();
	show("game","upgrades")
}

function show(one, two) {
    document.getElementById(one).style.display = 'block';
    document.getElementById(two).style.display = 'none';
}

function menu_voltar() {
    show("game","upgrades")
}

function menu_upgrades() {
    show("upgrades","game")
}
            
var Clicker={}


Clicker.init=function(){
	//---------------------------------------------------------------
	Clicker.time=new Date().getTime();
	Clicker.fpsMeasure=new Date().getTime();
	Clicker.accumulatedDelay=0;
	Clicker.fps=30;//Frames por segundo
	//---------------------------------------------------------------
	Clicker.pdf=0;//Pontos de funcao
	Clicker.increment=1;//Inicialmente o incremento de um clique é 1
	Clicker.soft=0;//Dinheiro
	Clicker.autopdf=0;//pdf por segundo automatico(programadores)
	Clicker.CMMI=0;
	Clicker.lastClick=0;
	Clicker.mypopup=document.getElementById("popup");
	Clicker.popuptime=0;
	//---------------------------------------------------------------
	Clicker.click=function(event){
			if (event) event.preventDefault();
			if (new Date().getTime()-Clicker.lastClick<1000/250){}
			else Clicker.earn(Clicker.increment);
			
		}

	Clicker.earn=function(x){
		Clicker.pdf+=x;
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


	Clicker.Achiev=[
		["Atingiu Nível 1 CMMI",0,50],
		["Atingiu Nível 2 CMMI",1,100],
		["Atingiu Nível 3 CMMI",2,150],
		["Atingiu Nível 4 CMMI",3,200],
		];


	Clicker.loop();
}

Clicker.draw=function(){
		document.getElementById("counter").innerHTML= Clicker.pdf.toFixed();
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
	if(Clicker.mypopup.innerHTML!=''){
		Clicker.popuptime+=1000/Clicker.fps;
		if(Clicker.popuptime>=5000){
			Clicker.popup('');
		}
	}

	if(Clicker.autopdf==Clicker.Achiev[Clicker.CMMI][1] && Clicker.pdf>=Clicker.Achiev[Clicker.CMMI][2]){
		Clicker.autopdf++;Clicker.popup(Clicker.Achiev[Clicker.CMMI][0]);
		if(Clicker.CMMI<3)Clicker.CMMI++;
	}
	Clicker.earn(Clicker.autopdf/Clicker.fps);
}