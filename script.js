const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("mousemove",e=>{

const x=e.offsetX/card.clientWidth-.5;

const y=e.offsetY/card.clientHeight-.5;

card.style.transform=
`rotateY(${x*12}deg) rotateX(${-y*12}deg) translateY(-8px)`;

});

card.addEventListener("mouseleave",()=>{

card.style.transform="rotateX(0) rotateY(0)";

});

});
