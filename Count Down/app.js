const endDate="1 jan 2022"
const textTime=document.querySelector(".time")
function countDown(){
    const newYear= new Date(endDate);
    const today= new Date();
    const dateSecond=(newYear-today)/1000;
    var days=Math.floor(dateSecond/3600/24);
    var hour=Math.floor(dateSecond/3600) % 24;
    var minutes=Math.floor(dateSecond/60)%60;
    var seconds=Math.floor(dateSecond%60);
    if(seconds<10 || seconds==0){
        seconds="0"+seconds;
    };
    if(minutes<10 || minutes==0){
        minutes="0"+minutes;
    };
    if(hour<10 || hour==0){
        hour="0"+hour;
    };
    if(days<10 || days==0){
        days="0"+days;
    };
    textTime.innerHTML=`${days}D ${hour}H ${minutes}MN ${seconds}S`;

}
setInterval(countDown,1000);