
	let seconds = 0;
	let minutes = 0;
	let hours = 0;
	

	let displaySeconds = 0;
	let displayMinutes = 0;
	let displayHours = 0;
	

	let interval = null;
	

	let status = "stopped";

	function stopWatch(){
	
	    seconds++;
	

	    if(seconds / 60 === 1){
	        seconds = 0;
	        minutes++;
	
	        if(minutes / 60 === 1){
	            minutes = 0;
	            hours++;
	        }
	
	    }
	

	    if(seconds < 10){
	displaySeconds = "0" + seconds.toString();
	    }
	    else{
	displaySeconds = seconds;
	    }
	
	    if(minutes < 10){
	displayMinutes = "0" + minutes.toString();
	    }
	    else{
	displayMinutes = minutes;
	    }
	
	    if(hours < 10){
	displayHours = "0" + hours.toString();
	    }
	    else{
	displayHours = hours;
	    }
	

	document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
                document.getElementById("bold").innerHTML="Best Time: "+displayHours + ":" + displayMinutes + ":" + displaySeconds;
	
	}
	
	
	
	function startStop(){
	
	    if(status === "stopped"){
	
	        //Start the stopwatch (by calling the setInterval() function)
	        interval = window.setInterval(stopWatch, 1000);
	document.getElementById("startStop").innerHTML = "Stop";
	        status = "started";
	
	    }
	    else{
	
	window.clearInterval(interval);
	document.getElementById("startStop").innerHTML = "Start";
	        status = "stopped";
	
	    }
	
	}
	
	//Function to reset the stopwatch
	function reset(){

	location.reload();
	window.clearInterval(interval);
	    seconds = 0;
	    minutes = 0;
	    hours = 0;
	document.getElementById("display").innerHTML = "00:00:00";
	document.getElementById("startStop").innerHTML = "Start";	
	}


var newgame=document.querySelector('button');
newgame.onclick=function()
{
location.reload();
}
let button1=document.getElementById('one');
button1.onclick=function()
{
startStop();
button1.innerHTML='21';
let button2=document.getElementById('two');
button2.onclick=function()
{
button2.innerHTML='22';
let button3=document.getElementById('three');
button3.onclick=function()
{
button3.innerHTML='23';
let button4=document.getElementById('four');
button4.onclick=function()
{
button4.innerHTML='24';
let button5=document.getElementById('five');
button5.onclick=function()
{
button5.innerHTML='25';
let button6=document.getElementById('six');
button6.onclick=function()
{
button6.innerHTML='26';
let button7=document.getElementById('seven');
button7.onclick=function()
{
button7.innerHTML='27';
let button8=document.getElementById('eight');
button8.onclick=function()
{
button8.innerHTML='28';
let button9=document.getElementById('nine');
button9.onclick=function()
{
button9.innerHTML='29';
let button10=document.getElementById('ten');
button10.onclick=function()
{
button10.innerHTML='30';
let button11=document.getElementById('e');
button11.onclick=function()
{
button11.innerHTML='31';
let button12=document.getElementById('twelve');
button12.onclick=function()
{
button12.innerHTML='32';
let button13=document.getElementById('thirteen');
button13.onclick=function()
{
button13.innerHTML='33';
let button14=document.getElementById('fourteen');
button14.onclick=function()
{
button14.innerHTML='34';
let button15=document.getElementById('fifteen');
button15.onclick=function()
{
button15.innerHTML='35';
let button16=document.getElementById('sixteen');
button16.onclick=function()
{
button16.innerHTML='36';
let button17=document.getElementById('seventeen');
button17.onclick=function()
{
button17.innerHTML='37';
let button18=document.getElementById('eighteen');
button18.onclick=function()
{
button18.innerHTML='38';
let button19=document.getElementById('nineteen');
button19.onclick=function()
{
button19.innerHTML='39';
let button20=document.getElementById('t');
button20.onclick=function()
{
button20.innerHTML='40';
button1.onclick=function()
{
button1.innerHTML=' &nbsp;&nbsp;&nbsp;';
button2.onclick=function()
{
button2.innerHTML=' &nbsp;&nbsp;&nbsp;';
button3.onclick=function()
{
button3.innerHTML=' &nbsp;&nbsp;&nbsp;';
button4.onclick=function()
{
button4.innerHTML=' &nbsp;&nbsp;&nbsp;';
button5.onclick=function()
{
button5.innerHTML=' &nbsp;&nbsp;&nbsp;' ;
button6.onclick=function()
{
button6.innerHTML=' &nbsp;&nbsp;&nbsp;';
button7.onclick=function()
{
button7.innerHTML=' &nbsp;&nbsp;&nbsp;';
button8.onclick=function()
{
button8.innerHTML=' &nbsp;&nbsp;&nbsp;';
button9.onclick=function()
{
button9.innerHTML=' &nbsp;&nbsp;&nbsp;';
button10.onclick=function()
{
button10.innerHTML='&nbsp&nbsp;&nbsp;';
button11.onclick=function()
{
button11.innerHTML=' &nbsp;&nbsp;&nbsp;';
button12.onclick=function()
{
button12.innerHTML='  &nbsp;&nbsp;&nbsp;  ';
button13.onclick=function()
{
button13.innerHTML='    &nbsp;&nbsp;&nbsp; ';
button14.onclick=function()
{
button14.innerHTML='    &nbsp;&nbsp;&nbsp;    ';
button15.onclick=function()
{
button15.innerHTML='     &nbsp;&nbsp;&nbsp;   ';
button16.onclick=function()
{
button16.innerHTML='    &nbsp;&nbsp;&nbsp;  ';
}
button17.onclick=function()
{
button17.innerHTML='     &nbsp;&nbsp;&nbsp;   ';
button18.onclick=function()
{
button18.innerHTML='&nbsp;&nbsp;&nbsp;  ';
button19.onclick=function()
{
button19.innerHTML='&nbsp;&nbsp;&nbsp;   ';
button20.onclick=function()
{
button20.innerHTML='&nbsp;&nbsp;&nbsp;  ';
startStop();
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}}}}
	
	    