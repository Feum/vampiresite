function saluteClick(img) {

    var source = img.src;
    if (source.match(/\bvita0.png/g) == "vita0.png")
        img.src = "vita1.png";
    if (source.match(/\bvita1.png/g) == "vita1.png")
        img.src = "vita2.png";
    if (source.match(/\bvita2.png/g) == "vita2.png")
        img.src = "vita3.png";
    if (source.match(/\bvita3.png/g) == "vita3.png")
        img.src = "vita0.png";
}

function setSalute(n) {
    for (var i = 0; i < n; i++)
        document.getElementById("saluteBox").innerHTML += "<img onclick='saluteClick(this)'"+ healthsize + "src='vita0.png' class='salute' />"
}

var health = 9;
var healthsize = "";
if (health > 10)
    healthsize = "style='height:2vw;'"
if (health > 15)
    healthsize = "style='height:1vw;'"
if (health > 30)
    health = 30;

    
setSalute(health);