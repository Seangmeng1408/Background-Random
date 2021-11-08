var btn=document.getElementById("button");
var hexValue=[1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
var bodyImage=document.body.style;
var paragraph =document.querySelector("p");
btn.addEventListener('click',HexUpdate)
function HexUpdate() {
    var hexColor='#';
    for (let i=0;i<6;i++){
        var index=Math.floor(Math.random()*hexValue.length);
        hexColor+=hexValue[index];
        
    }
    bodyImage.backgroundColor=hexColor;
    paragraph.textContent=hexColor
}