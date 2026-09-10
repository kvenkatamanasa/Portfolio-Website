// =========================
// DARK MODE
// =========================

const themeToggle =
document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="dark"){

document.body.classList.add("dark-mode");

themeToggle.textContent="☀️";

}

themeToggle.addEventListener("click",()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){

localStorage.setItem(    
    "theme",    
    "dark"    
);    

themeToggle.textContent="☀️";

}else{

localStorage.setItem(    
    "theme",    
    "light"    
);    

themeToggle.textContent="🌙";

}

});

// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(link=>{

link.addEventListener(
"click",
function(e){

e.preventDefault();    

    const target =    
    document.querySelector(    
        this.getAttribute("href")    
    );    

    if(target){    

        target.scrollIntoView({    
            behavior:"smooth"    
        });    

    }    

}

);

});

// =========================
// ANIMATED SKILL BARS
// =========================

const skillBars =
document.querySelectorAll(".fill");

const skillObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){    

    const bar =    
    entry.target;    

    bar.style.width =    
    bar.dataset.width;    

}

});

},{
threshold:0.4
});

skillBars.forEach(bar=>{

skillObserver.observe(bar);

});

// Prevent duplicate certificate cards if the section is populated more than once.
const certificateCards = document.querySelectorAll(".certificate-card");
const seenCertificates = new Set();
certificateCards.forEach(card => {
    const title = card.querySelector("h3")?.textContent.trim().toLowerCase();
    if (title && seenCertificates.has(title)) {
        card.remove();
    } else if (title) {
        seenCertificates.add(title);
    }
});

// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
document.querySelectorAll(

".timeline-item,\
.skill-card,\
.project-card,\
.certificate-card,\
.contact-card"

);

revealElements.forEach(el=>{

el.style.opacity="0";

el.style.transform=
"translateY(40px)";

});

const revealObserver =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){    

    entry.target.style.opacity="1";    

    entry.target.style.transform=    
    "translateY(0px)";    

    entry.target.style.transition=    
    "all .8s ease";    

}

});

},{
threshold:0.15
});

revealElements.forEach(el=>{

revealObserver.observe(el);

});

// =========================
// HERO FADE EFFECT
// =========================

window.addEventListener(
"scroll",
()=>{

const hero =
document.querySelector(".hero");

if(!hero) return;

const scroll =
window.scrollY;

hero.style.opacity =
1 - scroll/700;

});

// =========================
// NAVBAR SHADOW ON SCROLL
// =========================

window.addEventListener(
"scroll",
()=>{

const nav =
document.querySelector("nav");

if(window.scrollY > 20){

nav.style.boxShadow =    
"0 10px 30px rgba(0,0,0,.08)";

}
else{

nav.style.boxShadow =    
"none";

}

});

// =========================
// FLOATING CARD EFFECT
// =========================

const cards =
document.querySelectorAll(

".skill-card,\
.project-card,\
.certificate-card,\
.contact-card"

);

cards.forEach(card=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =    
card.getBoundingClientRect();    

const x =    
e.clientX - rect.left;    

const y =    
e.clientY - rect.top;    

const rotateY =    
(x - rect.width/2)/20;    

const rotateX =    
-(y - rect.height/2)/20;    

card.style.transform =    
`perspective(1000px)    
rotateX(${rotateX}deg)    
rotateY(${rotateY}deg)    
translateY(-8px)`;

});

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =    
"translateY(0px)";

});

});

// =========================
// ACTIVE NAV LINK
// =========================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener(
"scroll",
()=>{

let current="";

sections.forEach(section=>{

const top =    
section.offsetTop - 150;    

if(window.scrollY >= top){    

    current =    
    section.getAttribute("id");    
}

});

navLinks.forEach(link=>{

link.classList.remove(    
"active-link"    
);    

if(    
link.getAttribute("href")    
=== `#${current}`    
){    

    link.classList.add(    
    "active-link"    
    );    

}

});

});

// =========================
// CONSOLE MESSAGE
// =========================

console.log(
"%cPortfolio Developed by Mamatha ✦",
"color:#00e5ff;font-size:16px;font-weight:bold;"
);
// Typing Hero

const words = [
"Computer Science Student",
"Aspiring Data Analyst"
];

let wordIndex = 0;
let charIndex = 0;

const typing =
document.getElementById("typing");

function typeEffect(){

if(!typing) return;

if(charIndex < words[wordIndex].length){

typing.textContent +=
words[wordIndex].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(charIndex > 0){

typing.textContent =
words[wordIndex].substring(
0,
charIndex-1
);

charIndex--;

setTimeout(eraseEffect,50);

}else{

wordIndex++;

if(wordIndex >= words.length){
wordIndex=0;
}

setTimeout(typeEffect,200);

}

}

typeEffect();


// Project Modal

const modal =
document.getElementById("projectModal");

const btn =
document.querySelector(".project-btn");

const closeBtn =
document.querySelector(".close-modal");

if(btn){

btn.onclick = () =>
modal.style.display = "block";

}

if(closeBtn){

closeBtn.onclick = () =>
modal.style.display = "none";

}

window.onclick = (e)=>{

if(e.target === modal){

modal.style.display="none";

}

};