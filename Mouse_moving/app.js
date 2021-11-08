var div=document.querySelector("div");
var nav=document.querySelector("nav");
var input=document.querySelector("input");
var btn=document.querySelector("button")
var X,Y;
var popUp=document.querySelector("#pop-up");
var p=document.createElement("p");
document.body.appendChild(p);

btn.addEventListener("click",start);

// });
// window.document.addEventListener("mousemove",(e)=>{})
function start(e){
    if(input.valueAsNumber>=0 && input.valueAsNumber<=100 ){
        document.addEventListener("mousemove",(e)=>{
            nav.style.width=(input.valueAsNumber+1)+("vw");
            X=e.clientX;
            Y=e.clientY;
            div.style.top=(Y-50)+"px";
            div.style.left=(X-50)+"px";
            // if (input.valueAsNumber>100){
            //     div.style.top=40+"vh";
            //     div.style.left=0+"px";
            //     nav.style.backgroundColor="";
            // }
            p.innerHTML= `top=<span> ${Y-50} px</span> and <span>left= ${X-50}</span>`;
            popUp.style.visibility="hidden"
            if (X>(innerWidth-nav.clientWidth)){
                div.style.backgroundColor="#ADFF2F"
            }else if (X<innerWidth-nav.clientWidth){
                div.style.backgroundColor="yellow"
            }
        });
    }else{
        popUp.style.visibility="visible"
        
    }
    
};
    
    




    

   
