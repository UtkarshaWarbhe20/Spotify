let gameSeq=[];
let userSeq=[];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if(started == false){
    console.log("game Started");
    startde = true;

    levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    btn.classList.remove(flash)
}
function levelUp(){
    level++;
    h2.innerText = 'Level ${level 1}';

    btnFlash();
}