let bt=document.querySelector(".gallery a");
let tg=document.querySelector("#lightbox-overlay");
let tgimg=tg.querySelector("img");

bt.addEventListener("click",function(){
    let newimg=this.querySelector("img").getAttribute("data-lightbox");
    
    tg.classList.add("visible");
    tgimg.getAttribute("src",newimg);
}
)
tg.addEventListener("click",function(){
    tg.classList.remove("visible");
})

