var body = document.getElementsByTagName("body")[0];
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
function setgradient(){
    body.style.background = "linear-gradient(to right,"+color1.value+","+color2.value+")";
}
color1.addEventListener("input",setgradient);
color2.addEventListener("input",setgradient);