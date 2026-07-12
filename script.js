// カードがふわっと表示
const items = document.querySelectorAll(".character");

const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
},{
  threshold:0.2
});

items.forEach(item=>{
  observer.observe(item);
});

// カードを少し傾ける
items.forEach(card=>{

  card.addEventListener("mousemove",(e)=>{

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 10;
    const rotateX = -(y / rect.height - 0.5) * 10;

    card.style.transform =
      `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;

  });

  card.addEventListener("mouseleave",()=>{

    card.style.transform =
      "perspective(900px) rotateX(0) rotateY(0) translateY(0)";

  });

});
