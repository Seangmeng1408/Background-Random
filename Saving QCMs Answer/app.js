var form = document.getElementById("form");
var myAnswer = document.getElementById("myanswer");
var input = document.getElementById("input");
var button = document.getElementById("button");
document.body.addEventListener('keydown', function (event)
{
    // if the keyCode is 32 ( space key was pressed )
    if (event.keyCode === 116) {
        // prevent default behaviour
        event.preventDefault();
        return false;
    }
});
input.addEventListener('keydown', function (event)
{
    // if the keyCode is 32 ( space key was pressed )
    if (event.keyCode === 116) {
        // prevent default behaviour
        event.preventDefault();
        return false;
    }
});

form.addEventListener ('submit',(e)=>{
    e.preventDefault();
    
    const DataStorage=input.value;
    var dataAvailable=false;
    if (DataStorage!="" && DataStorage!=" "){
        dataAvailable=true;
        Processing();
    }
    else if(DataStorage=="" ) {
        alert("Your answer can't empty");
        
    }
    else if(DataStorage==" "){
        alert("Your answer can't be space");
        input.value="";
    }
    function Processing(){
        if (dataAvailable=true){
            var li=document.createElement("li");
            var string="Your answer is" +" "+ DataStorage;
            li.innerHTML="Your answer is" +" "+"<span>" +DataStorage+"</span>";
            myanswer.appendChild(li);
            input.value="";
            li.addEventListener('contextmenu', function(ev) {
                ev.preventDefault();
                li.remove();
                
            });
        }

    }
    

});