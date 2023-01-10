//상수 textZone 에 #textZone을 할당하기
const textZone = document.querySelector("#textZone");
const btn1 = document.querySelector("#btn1");
//(#btn1 클릭)시 {textZone의 글씨색을 변경} <-하고싶은일
/* 
1. 함수를 실행할 요소를 선택 
    상수 btn1에 #btn1을 할당
2. 함수 실행(=호출)시점과 수행동작{실행문}을 확인
*/
btn1.onclick = function () {
  textZone.style.color = "red";
  textZone.classList.add("blue");
  //클릭시 textZone에 클래스 blue 추가
};
/* #btn2 마우스 오버시 textZone 배경을 노랑으로 변경*/
//onmouseover
const btn2 = document.querySelector("#btn2");
btn2.onmouseover = function () {
  textZone.style.backgroundColor = "yellow";
};
/*btn2 포커스 발생시 textZone 배경색 노랑으로  onfocus*/
btn2.onfocus = function () {
  textZone.style.backgroundColor = "yellow";
};
/* btn3에 이벤트 여러개 등록 */
const btn3 = document.querySelector("#btn3");
function textZone4() {
  textZone.style.color = "green";
  textZone.style.fontWeight = "bold";
}
//btn3.onmouseover=textZone4;
//btn3.onfocus=textZone4;
//btn3.onclick=function(){alert("click")};
//btn3.onclick=function(){
//    textZone.style.marginLeft="80px";
//}; // 하나의 대상에 이벤트 2개를 넣으면 이벤트의 덮어쓰기 현상이 일어남 이를 property listener로 이벤트 등록시 동일 이벤트는 덮어씌워진다
//addEventListener 이벤트를 묶어주는 역할을함
btn3.addEventListener("click", function () {
  alert("click");
});
btn3.addEventListener("click", function () {
  textZone.style.marginLeft = "80px";
});
const listWrap=document.querySelector("#listWrap");
const list1=document.querySelector(".list1");
listWrap.addEventListener("mouseenter",function(){list1.style.display="block"})
listWrap.addEventListener("mouseleave",function(){list1.style.display="none"})

let hover=document.querySelector(".hover"); 
//마우스가 hover에 진입시 글씨색을 aqua
//마우스가 hover에 벗어날시 글씨색을 red

/*
hover.addEventListener("mouseenter", function () { //this는 이벤트를 발생시킨 대상(지금의 경우 발생시킨 대상 hover)
	this.style.color = "aqua";
});
hover.addEventListener("mouseleave", function () {
	this.style.color = "red";
});
*/

hover.addEventListener("mouseenter", ()=>{
    //이벤트를 화살표 함수로 작성시 this는 객체 자신이 아닌 윈도우를 가르킴
    console.log(this)
	this.style.color = "aqua";
});