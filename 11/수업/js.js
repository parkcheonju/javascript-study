document.addEventListener("DOMContentLoaded",()=>{
    let button=document.querySelectorAll(".gallery li a");
    let target=document.querySelector("#lightbox-overlay");
    let targetImg=target.querySelector("img");

    for(i=0; i<button.length; i++){
        button[i].addEventListener("click",function(){
            let data=this.querySelector("img").getAttribute("data-lightbox");
            
            targetImg.setAttribute("src",data);

            target.classList.add("visible");
        })
    }target.addEventListener("click",function(){
        this.classList.remove("visible");
    })

})  