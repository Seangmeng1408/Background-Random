


var el=document.getElementById("sub-container");
var text=document.querySelector(".result")
var target,value="",opt,eq;
var result;

el.addEventListener("click",(e)=>{
    if(e.target.className){
        target=e.target;
        if(target.className=="clear"){
            text.children[3].innerText='0';
            text.children[0].innerText=""
            result=0;
            value=""
        }
        else{
            if(target.className=="number"){
                value+=target.id
                text.children[3].innerText=value;
                
            }
            else if(target.className=="operator"){
                opt=target.id;
                
              
                console.log(result)
                if(text.children[3].innerText!="0"){
                    text.children[0].innerText=text.children[0].innerText+value+opt;
                    text.children[3].innerText='0';
                    value=""
                    
                };
                
                
                
            }
            else if(target.className=="equal"){
                text.children[3].innerText=eval(text.children[0].innerText+text.children[3].innerText);
                text.children[0].innerText='';
                value=eval(text.children[0].innerText+text.children[3].innerText)
                
            }
            
            
            
            
            
        }
    }
    
    
    
    
})