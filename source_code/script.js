var btn=document.getElementById("Click")
var hediv=document.querySelector("body")
function onBtnClick(){
    var rc=Math.floor(Math.random()*255)
    var gc=Math.floor(Math.random()*255)
    var bc=Math.floor(Math.random()*255)
    console.log(rc+" "+gc+" "+bc)
    hediv.style.backgroundColor= "rgb("+rc+","+gc+","+bc+")"
    btn.innerHTML= "rgb("+rc+","+gc+","+bc+")"
}
btn.onclick=onBtnClick
