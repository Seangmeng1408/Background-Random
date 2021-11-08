var timer =document.getElementById("stopwatch");
var stopbuttons=document.getElementById("stopbutton");
var startbuttons=document.getElementById("startbutton");
var resetbuttons=document.getElementById("resetbutton");
var h=0;
var mn=0;
var sec=0;
var stoptime=true;
function startTime(){
    if (stoptime==true){
        stoptime=false;
        timeReback();
    }
}
function stopTime(){
    if (stoptime==false){
        stoptime=true;
        startbuttons.innerText="Continue";

    }
}
function timeReback(){
    if(stoptime==false){
        sec=parseInt(sec);
        mn=parseInt(mn);
        h=parseInt(h);
        startbuttons.innerText="Start"

        sec=sec+1;
        if (sec==60){
            mn=mn+1;
            sec=0;
        }
        if (mn==60){
            h=h+1;
            mn=0;
            sec=0;
        }
        if(sec<10 || sec==0){
            sec="0"+sec;
        }
        if(mn<10 || mn==0){
            mn="0"+mn;
        }
        if(h<10 || h==0){
            h="0"+h;
        }
    
    timer.innerHTML=h+":"+mn+":"+sec;
    setTimeout("timeReback()", 1000);


    }
}
function resetTime(){
    timer.innerHTML="00:00:00";
    stoptime=true;
    h = 0;
    sec = 0;
    mn = 0;
    startbuttons.innerText="Start"
}
