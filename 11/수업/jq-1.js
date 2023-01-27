let bt=document.querySelectorAll(".gallery a");
let tg=document.querySelector("#lightbox-overlay");
let tgimg=tg.querySelector("img");

console.log(bt[0]);
bt[0].addEventListener("click",function(){
    let newimg=this.querySelector("img").getAttribute("data-lightbox");
    
    tg.classList.add("visible");
    tgimg.getAttribute("src",newimg);
}
)
tg.addEventListener("click",function(){
    tg.classList.remove("visible");
})

