// var el1= document.getElementById("one");
// el1.style.background="yellow";
// console.log(el1);
//
// //var el2= document.getElementsByTagName("li").style.background="pink"; 이 경우 값이 안나온다
// //이유는 console.log(el2)를 검색해보면 알 수 있는데 배열의 형태를 띄고있는 형태기때문에 숫자를 지정해줘야 한다는것을 알 수 있다.
// var el2= document.getElementsByTagName("li");
// el2[1].style.background="pink";
// console.log(el2);
// //[0,1,2] 배열의 형태를 가진 상태이다
//
// var el3= document.getElementsByTagName("li");
// el3[2].style.backgroundImage='url(http://qwerew.cafe24.com/example/javascript/chicken.png)';
// el3[2].style.backgroundSize='20px';
// el3[2].style.backgroundRepeat='no-repeat';

//id선택
//var el1=document.getElementById("one");
//el1.style.background="yellow";
//var el2=document.getElementsByTagName("li");
//el2[0].style.backgroundImage='url(http://qwerew.cafe24.com/example/javascript/chicken.png)';
//el2[0].style.backgroundSize='20px';
//el2[1].style.backgroundImage='url(http://qwerew.cafe24.com/example/javascript/chicken.png)';
//el2[1].style.backgroundSize='20px';
//el2[2].style.backgroundImage='url(http://qwerew.cafe24.com/example/javascript/chicken.png)';
//el2[2].style.backgroundSize='20px';

//[0,1,2,].style.background=yellow
//반복은 함수 바뀌는건 변수라고 가정하고 "반복문" 사용키로 함

var el2 = document.getElementsByTagName("li");
var el3 = document.getElementsByTagName("ul"); //(40번째 줄에서 사용)
//console.log(el2)
for (var i = 0; i < el2.length / 2; i++) {
  // 조건을 걸지 않으면 아래있는 li에도 전부 적용되기때문에 걸어야한다
  el2[i].style.backgroundImage = "url(http://qwerew.cafe24.com/example/javascript/chicken.png)";
  el2[i].style.backgroundSize = "20px";
  el2[i].style.backgroundRepeat = "no-repeat";
}

/*
for(var e of el3 ) {
  e.style.background="skyblue"
}
*/
// 익스에서는 안돼서 주석

//클래스 선택

var el4 = document.getElementsByClassName("highlight");
el4[1].style.cssText = "width:500px; margin:auto; background:pink;"; //css속성 여러개 -> 추가x, 수정됨

//querySelector
var el5 = document.querySelector(".highlight");
//console.log(el5); //단일요소만 반환 콘솔은 항상 지워준다
el5.style.color = "red";

var el6 = document.querySelectorAll(".highlight");
//console.log(el6);
el6[2].style.color = "orange";

for (var k = 0; k < el6.length; k++) {
  el6[k].style.color = "green";
}
for ( a of el6) {
	a.style.backgroundColor = "black";
}
//el6.forEach(function (b) {
//	b.style.fontSize = "30px";
//});

el6.forEac(function(){});