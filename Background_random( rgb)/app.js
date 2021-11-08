
const button=document.getElementById("button");
const paragraph=document.getElementById("paragraph");
var body=document.body.style;
function change(){
    var i=Math.floor(Math.random()*255).toString(10);
    var a=Math.floor(Math.random()*255).toString(10);
    var b=Math.floor(Math.random()*255).toString(10);
    const randomRGB="rgb("+ i +"," +a+ "," +b+ ")";
    body.backgroundColor=randomRGB;
    body.transition=1000+"ms";
    paragraph.innerText=randomRGB;
    paragraph.style.border="2px solid black";
    paragraph.style.padding="1em";
    
    // setTimeout("change()",500)
};
button.addEventListener("click",change);
// change();

