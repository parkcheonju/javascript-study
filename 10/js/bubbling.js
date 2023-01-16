var divs=document.querySelectorAll("div");
divs.forEach(function(div){
    div.addEventListener('click',logEvent,{capture:false})//capture은 객체형으로 만들고 기본값이 false기때문에321로 나오고(클릭한 역순) true로 설정하면 123순(배치된순)으로 나온다
})
function logEvent(e){
    //console.log(e.target);//target 이벤트 발생한것
    console.log(e.currentTarget.className);//currentTarget 이벤트 등록한것
}