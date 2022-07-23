let input=document.querySelector(".input");
let experssion=document.querySelector(".expression");
let operation=document.querySelector("#operation");
let Expression_Dsp="",Expression="";


let Delete=document.querySelector("#delete");


let value="";
let lastOperand="",isOperand=false;
operation.addEventListener("click",(e)=>{
    let target=e.target;
    if(target.classList.contains("number")){
        isOperand=false;
        lastOperand="";
        Expression+=target.getAttribute("data-actual-value");
        Expression_Dsp+=target.innerText;
        value+=target.innerText;
        input.innerText=value;
    }
    if(target.classList.contains("operand")){
        if(Expression_Dsp!=""){
            if(target.getAttribute("data-actual-value")=="c"){
                Expression="";
                Expression_Dsp="";
                input.innerText="0";
                experssion.innerText="0";
                value="";
            }else if(target.getAttribute("data-actual-value")=="d"){
                Expression_Dsp=Expression_Dsp.slice(0,-1);
                Expression=Expression.slice(0,-1);
                if(value.length>1){
                    //input.innerText=value;
                    value=value.slice(0,-1);
                    input.innerText=value;

                }else{
                    value=value.slice(0,-1);
                    input.innerText="0";
                }
            }else if(target.getAttribute("data-actual-value")==")" ||target.getAttribute("data-actual-value")=="("){
                Expression+=target.getAttribute("data-actual-value");
                Expression_Dsp+=target.innerText;
                experssion.innerText=Expression_Dsp;
                input.innerText="0";
                value="";
            }else {
                if(target.getAttribute("data-actual-value")!="="){
                    if(!isOperand){
                        Expression+=target.getAttribute("data-actual-value");
                        Expression_Dsp+=target.innerText;
                        experssion.innerText=Expression_Dsp;
                        input.innerText="0";
                        value="";
                        isOperand=true;
                    }else{
                        Expression_Dsp=Expression_Dsp.slice(0,-1);
                        Expression_Dsp+=target.innerText;
                        Expression=Expression.slice(0,-1);
                        Expression+=target.getAttribute("data-actual-value");
                        experssion.innerText=Expression_Dsp;
                    }
                }else{
                    experssion.innerText=Expression_Dsp;
                    input.innerText=""+eval(Expression);
                    Expression_Dsp=""+eval(Expression);
                    Expression=""+eval(Expression);
                    value=""+eval(Expression);
                    //console.log(value);
                }
            }

        }
    }
})



