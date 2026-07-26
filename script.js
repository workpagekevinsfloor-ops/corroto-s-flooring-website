/*=========================================
 CORROTO'S FLOORING
 Premium Contractor Website JavaScript
=========================================*/


document.addEventListener("DOMContentLoaded",()=>{


/*=========================================
 SMOOTH SCROLLING
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

const target=document.querySelector(
this.getAttribute("href")
);

if(target){

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",
block:"start"

});

}

});

});



/*=========================================
 NAVBAR EFFECT
=========================================*/

const nav=document.querySelector("nav");


window.addEventListener("scroll",()=>{


if(!nav) return;


if(window.scrollY>80){

nav.style.background="rgba(10,10,10,.95)";
nav.style.backdropFilter="blur(15px)";
nav.style.boxShadow=
"0 10px 35px rgba(0,0,0,.45)";


}else{


nav.style.background=
"rgba(0,0,0,.70)";

nav.style.boxShadow="none";


}


});



/*=========================================
 ACTIVE NAVIGATION
=========================================*/


const sections=document.querySelectorAll("section");

const links=document.querySelectorAll(
"nav a"
);


window.addEventListener("scroll",()=>{


let current="";


sections.forEach(section=>{


const sectionTop=
section.offsetTop-180;


if(window.scrollY>=sectionTop){

current=section.id;

}


});


links.forEach(link=>{


link.classList.remove("active");


if(link.href.includes(current)){

link.classList.add("active");

}


});


});




/*=========================================
 SCROLL REVEAL ANIMATION
=========================================*/


const reveal=document.querySelectorAll(

".card, .review, .gallery img, .stats div, .contact div, .about-image"

);


const revealObserver=
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


revealObserver.unobserve(
entry.target
);


}


});


},{
threshold:.15
});



reveal.forEach(item=>{

item.classList.add("hidden");

revealObserver.observe(item);


});




/*=========================================
 NUMBER COUNTERS
=========================================*/


const counters=document.querySelectorAll(
".stats h2"
);



counters.forEach(counter=>{


let started=false;


const observer=
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting && !started){


started=true;


let target=parseInt(
counter.innerText
);


let count=0;


let timer=setInterval(()=>{


count+=Math.ceil(target/50);


if(count>=target){

count=target;

clearInterval(timer);

}


counter.innerText=count+"+";


},30);



}



});


});


observer.observe(counter);


});




/*=========================================
 GALLERY LIGHTBOX
=========================================*/


const images=
document.querySelectorAll(
".gallery img"
);


if(images.length){


const lightbox=
document.createElement("div");


lightbox.id="lightbox";


lightbox.innerHTML=`

<div class="lightbox-close">
×
</div>

<img src="">

`;

document.body.appendChild(lightbox);



const image=
lightbox.querySelector("img");


images.forEach(photo=>{


photo.addEventListener(
"click",
()=>{


image.src=photo.src;


lightbox.style.display="flex";


});


});



lightbox.addEventListener(
"click",
()=>{


lightbox.style.display="none";


});


}




/*=========================================
 BACK TO TOP BUTTON
=========================================*/


const topButton=
document.createElement("button");


topButton.innerHTML="↑";


topButton.className=
"top-button";


document.body.appendChild(
topButton
);



window.addEventListener(
"scroll",
()=>{


if(window.scrollY>600){

topButton.classList.add("active");


}else{

topButton.classList.remove("active");

}


});



topButton.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};





/*=========================================
 GOLD FLOATING CALL BUTTON
=========================================*/


const callButton=
document.createElement("a");


callButton.href=
"tel:+14692384546";


callButton.className=
"call-floating";


callButton.innerHTML=
`
<i class="fa-solid fa-phone"></i>
`;



document.body.appendChild(
callButton
);





/*=========================================
 ESTIMATE FORM
=========================================*/


const form=
document.querySelector(
".estimate-form"
);


if(form){


form.addEventListener(
"submit",
(e)=>{


e.preventDefault();


alert(
"Thank you for contacting Corroto's Flooring! We will get back to you soon."
);


form.reset();


});


}




/*=========================================
 FOOTER YEAR AUTOMATIC UPDATE
=========================================*/


const footer=
document.querySelector("footer");


if(footer){


footer.innerHTML=
`
© ${new Date().getFullYear()} Corroto's Flooring 
• Professional Flooring Contractor
`;


}




/*=========================================
 PAGE LOAD ANIMATION
=========================================*/


document.body.classList.add(
"loaded"
);



console.log(
"Corroto's Flooring website loaded successfully."
);



});