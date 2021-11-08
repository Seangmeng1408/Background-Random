const form = document.getElementById("form");
const input = document.getElementById("input");
const task = document.getElementById("task");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    const tasktodo=input.value;
    if (tasktodo){
        const taskli=document.createElement("li")
        taskli.innerText=tasktodo;
        task.appendChild(taskli);
        input.value="";
        taskli.addEventListener('click',()=>{
            taskli.classList.toggle("complete")
        })
        taskli.addEventListener('contextmenu', function(ev) {
            ev.preventDefault();
            taskli.remove();
            
        });
    }
    else if(tasktodo==""){
        alert("todos can't empty")
    }
    


    
} );