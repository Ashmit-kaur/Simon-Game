let gameseq=[];
let userseq=[];
let color=['red','yellow','green','blue'];
let started=false;
let level=0;
let h2=document.querySelector('h2');
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game has started");
    started=true;
    levelup();
    }
})

function btnflash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");

},250);
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randomidx=Math.floor(Math.random()*3);
    let randomcolor=color[randomidx];
    let randombtn=document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log('gameseq');
    console.log(gameseq);
   btnflash(randombtn);
}

function buttonpress(){
  let btn=this;
  btnflash(btn);
  let usercolor=btn.getAttribute("id");
  userseq.push(usercolor);
  console.log('userSeq');
  console.log(userseq);
  checkans(userseq.length-1);

}

function checkans(index){
if(gameseq[index]===userseq[index]){
    if(userseq.length==gameseq.length){
   setTimeout(levelup,1000);
    }
}
else{
    h2.innerHTML=`Game Over!Your score was <b>${level}</b> ,<br>press any key to start `;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";
    },150)
    reset();
}
}

let btnAll=document.querySelectorAll('.btn');
for(btn of btnAll){
    btn.addEventListener('click',buttonpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}