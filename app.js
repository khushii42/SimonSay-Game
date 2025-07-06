let gameSeq = [];
let userSeq = [];

let h2 = document.querySelector("h2");

let btns = ["orange", "green" ,"red","blue"];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("game started");
        started = true;
        levelup();
    }
});

function btnflash (btn) { 
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");}, 250);
}

function userflash (btn) {
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");},250);
}

function levelup(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()* 4)+0;
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`#${randColor}`);

    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);

    btnflash(randbtn);
}

function checkAns(idx){
    // console.log("level :", level);
    // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
         setTimeout( levelup, 1000);
        }
    } else{
        h2.innerHTML = `Game Over!, Your Score <b> ${level} </b> was Press  any key to Start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout( function(){
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        reset();
    }
}

function btnPress(){

    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);

    checkAns((userSeq.length) - 1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns) {
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}