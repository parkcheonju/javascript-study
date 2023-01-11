const section=document.querySelector('section');//section 변수에 담기
const text=document.querySelector('.txt'); //변수에 담아야할 것들
const progressBar=document.querySelector('.bar'); //모니터 창의 높이
const windowHeight=window.innerHeight; //창의 높이

let scrollTop;//스크롤 양을 담을 비어있는 변수

window.addEventListener("scroll", function () {
	scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
  //console.log(scrollTop);
  /*
  퍼센트 구하기
  1. 화면높이 windowHeight
  2. 문서총높이 scrollHeight를 변수로 선언 후, ???.clientHeight // 패딩을 포함한 높이
  3. scrollRealHeight = [2](scrollHeight) - [1](windowHeight)
  */
    let scrollHeight=section.clientHeight;
    let scrollRealHeight=scrollHeight-windowHeight;
    /* 퍼센트로 바꾸기 (부분 [scrollTop]/전체[scrollRealHeight])*100 */
    let scrollPercent=(scrollTop/scrollRealHeight)*100;
    text.textContent=Math.floor(scrollPercent)+"%";
    progressBar.style.width=Math.floor(scrollPercent)+"%"
});

// //section 변수에 담기
// const section = document.querySelector("section");
// //변수에 담아야할것들
// const text = document.querySelector(".txt");
// const progressBar = document.querySelector(".bar");
// //창높이
// const windowHeight = window.innerHeight;
// //스크롤양을 담을 변수
// let scrollTop;

// window.addEventListener("scroll", function () {
// 	scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
// 	/*퍼센트구하기 
//     1. 화면높이 windowHeight
//     2. 문서총높이 scrollHeight 변수로 선언후 ???.clientHeight //패딩을 포함한 높이
//     3. scrollRealHeight= 2 - 1  
//   */

// 	let scrollHeight = section.clientHeight;
// 	let scrollRealHeight = scrollHeight - windowHeight;
//   /* 퍼센트로 바꾸기 (부분/전체)*100 */
//   let scrollPercent=(scrollTop/scrollRealHeight)*100;
//   text.textContent=Math.floor(scrollPercent)+"%";
//   progressBar.style.width=Math.floor(scrollPercent)+"%"
// });

