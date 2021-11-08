
var Cambodia=document.getElementById("Cambodia");
var Usa=document.getElementById("Usa");
var LocationName=document.getElementById("Locationname");
Cambodia.addEventListener('click',() => {
    setInterval(showtimeKH,1000);
    LocationName.textContent="ម៉ោងនៅប្រទេសកម្ពុជា"
    
    
    
});
Usa.addEventListener('click',()=>{
    setInterval(showtimeUS,1000);
    LocationName.textContent="USA - California"
    
    
});


function showtimeKH(){
    var time =document.getElementById("time");
    var NowTime=new Date();
    var NowHour=NowTime.getHours();
    var NowMN=NowTime.getMinutes();
    var NowSecond=NowTime.getSeconds();
    var session="AM"
    // var string= NowHour +"H:"+NowMN+"MN:"+NowSecond+"S";
    if (NowHour==0){
        NowHour=12;
    };
    if(NowHour>12){
        NowHour=NowHour-12;
        session="PM"
        
    };
    NowHour = (NowHour < 10) ? "0" + NowHour :NowHour;
    NowMN = (NowMN < 10) ? "0" + NowMN : NowMN;
    NowSecond = (NowSecond < 10) ? "0" + NowSecond : NowSecond;
    /*if (NowHour<10 || NowHour==0){
        NowHour="0"+NowHour;
    };
    if (NowMN<10 || NowMN==0){
        NowMN="0"+NowMN;
    };
    if (NowSecond<10 || NowSecond==0){
        NowSecond="0"+NowSecond;
    };*/
    var string= NowHour +"H:"+NowMN+"MN:"+NowSecond+"S" +" "+"<span >"+session+"</span>";
    time.innerHTML=string;
    // time.innerText=string;
    // time.textContent=string;
    setTimeout(showtimeKH, 1000);
}
function showtimeUS(){
    var time =document.getElementById("time");
    var NowTime=new Date();
    var NowHour=NowTime.getHours();
    var NowMN=NowTime.getMinutes();
    var NowSecond=NowTime.getSeconds();
    var session="AM";
    var usahour=NowHour+10;
    // var string= NowHour +"H:"+NowMN+"MN:"+NowSecond+"S";
    /*if (usahour==0){
        usahour=12;
        
    };*/
    if(usahour>12 && usahour<=24){
        usahour=usahour-12;
        session="PM";
        
    };
    if (usahour>24){
        usahour=usahour-24;
        session="AM";
    };
    usahour = (usahour < 10) ? "0" + usahour :usahour;
    NowMN = (NowMN < 10) ? "0" + NowMN : NowMN;
    NowSecond = (NowSecond < 10) ? "0" + NowSecond : NowSecond;
    /*if (usahour<10 || usahour==0){
        usahour="0"+usahour;
    };
    if (NowMN<10 || NowMN==0){
        NowMN="0"+NowMN;
    }
    if (NowSecond<10 ||NowSecond==0){
        usahour="0"+usahour;
    };*/
    
    var string= (usahour) +"H:"+NowMN+"MN:"+NowSecond+"S" +" "+"<span >"+session+"</span>";
    time.innerHTML=string;
    
    // time.innerText=string;
    // time.textContent=string;
    
    
    
    
};





