var p=document.getElementById("paragraph");
var span=document.getElementById("span");
var output=document.getElementById("output");
function randomAnswer(){
    var answer = ["a","b","c","d"];
    let i=Math.floor(Math.random()*4);
    span.innerText= answer[i];
    var RDANSWER="Your guessing answer is " ;
    // paragraph.appendChild.RDANSWER;
    p.innerHTML=RDANSWER +"<span>" +answer[i] +"</span>" ;
    ;
    AnswerSaving();
    function AnswerSaving(){
        const AnswerList=document.createElement("li");
        const Answer="You answer is"+" "+ answer[i];
        AnswerList.innerText=Answer;
        output.appendChild(AnswerList);
        
        
    };
    
    
    
    
};


