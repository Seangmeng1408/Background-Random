(function () {
    let newNum=0;
    var button=document.querySelectorAll("button");
    var paragraph =document.querySelector("p");
    button.forEach(btn =>{
        btn.addEventListener('click',()=>{
            if (btn.classList.contains("minus")){
                newNum--
            }
            else if (btn.classList.contains("plus")){
                newNum++
            }
            
            paragraph.innerText=newNum;
        })
   
       
        
    });
    
})();



