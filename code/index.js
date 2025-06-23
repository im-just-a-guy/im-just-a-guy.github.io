let play=document.getElementById("sound");
function Section3(){
    const number=document.getElementById("number").value;
    if(number<=50){
        document.getElementById("message").textContent="Bravo, tu as gagné "+number+" euros!";
        setTimeout(Getalert,4000);
    } else {
        document.getElementById("message").textContent="Bravo, tu as perdu "+number+" euros!";
        setTimeout(Getalert,4000);
    }
}
function Getalert(){
    alert("Ce site souhaite:\n-Accéder à votre compte bancaire");
}
function getMusic(){
    let music = new Audio("code/sound1.mp3");
    music.play();
}
play.addEventListener("click",getMusic);
function Kill(){
    let a=0;
    while (true){
        a+=Math.random();
    }
}
