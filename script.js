// =========================================
// Birthday Surprise For Preksha ❤️
// Part 3A
// =========================================

// Loader
window.onload = () => {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 2500);

};

// =========================================
// Create Stars
// =========================================

const stars = document.getElementById("stars");

for(let i=0;i<180;i++){

    const star=document.createElement("div");

    star.classList.add("star");

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*3+"s";

    star.style.animationDuration=(1+Math.random()*3)+"s";

    stars.appendChild(star);

}

// =========================================
// Floating Hearts
// =========================================

const hearts=document.getElementById("hearts");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(18+Math.random()*18)+"px";

    heart.style.animationDuration=(6+Math.random()*6)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },12000);

}

setInterval(createHeart,600);

// =========================================
// Story Lines
// =========================================

const lines=[

"Hey Preksha... ❤️",

"Today isn't just another day...",

"Because today, the world celebrates someone truly wonderful. ✨",

"You are one of those people who make ordinary days feel special.",

"Your kindness...",

"Your smile...",

"And your positive energy...",

"Make everyone around you a little happier. 🌸",

"Thank you for being such an amazing best friend.",

"I hope life always gives you countless reasons to smile. 💕",

"VERY GREATFUL TO HAVE A PERSON LIKE YOU ",
"AND VERY SPECIAL...",
"THANKS YOU FOR SUGGESTING ME AMAZING SONGS ",

"SO HAPPY BIRTHDAY PREKSHA  💕 "

];

const story=document.getElementById("story");

const writer=document.getElementById("typewriter");

const startBtn=document.getElementById("startBtn");

const nextBtn=document.getElementById("nextBtn");

let index=0;

// =========================================
// Open Surprise
// =========================================

startBtn.onclick=()=>{

    document.querySelector(".hero").style.display="none";

    story.style.display="flex";

    typeLine();

};

// =========================================
// Typewriter
// =========================================

function typeLine(){

    writer.innerHTML="";

    nextBtn.style.display="none";

    let text=lines[index];

    let i=0;

    const typing=setInterval(()=>{

        writer.innerHTML+=text.charAt(i);

        i++;

        if(i>=text.length){

            clearInterval(typing);

            nextBtn.style.display="inline-block";

        }

    },55);

}

// =========================================
// Next Button
// =========================================

nextBtn.onclick=()=>{

    index++;

    if(index<lines.length){

        typeLine();

    }

    else{

        story.style.display="none";

        document.getElementById("letter").style.display="flex";

        window.scrollTo({

            top:document.getElementById("letter").offsetTop,

            behavior:"smooth"

        });

        setTimeout(()=>{

            createLetterButton();

        },800);

    }

};

// =========================================
// Continue Button After Letter
// =========================================

function createLetterButton(){

    if(document.getElementById("continueBtn")) return;

    const btn=document.createElement("button");

    btn.id="continueBtn";

}