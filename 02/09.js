/* $("선택자") = document.querySelector 와 같음*/
// var heading=document.querySelector("h1");


// document.querySelector("h1").style.color="red";
// /* $("선택자") .css("color","red") */
// document.querySelector("h1").style.backgroundColor="yellow";
// /* $("선택자") .css({"backgroundColor","yellow"}) */
// document.querySelector("h1").onclick=function(){
//     document.querySelector("h1").style.backgroundColor="green";
// }

// 이때 반복되는 문구가 싫다면 const로 지정해서 코드를 짧게만들수있다
// const h1=document.querySelector("h1");
// h1.style.color = "red";
// h1.style.backgroundColor = "yellow";
// h1.onclick = function () {
// 	h1.style.backgroundColor = "green";
// };

/* 조건문 */
// var your_sex="남자"
// document.write("당신은"+your_sex+"이므로")
// // 조건문시 if(조건){조건이 참일때 실행}
// if(your_sex=="남자"){
//     document.write("반바지를 입으세요.");
// }
// if(your_sex=="여자"){
//     document.write("긴바지를 입으세요.");
// }

/* 현재 시간이 18시 이전이면 해를 출력하고 18시 이후면 달을 출력 */

let current=new Date();
let day_time=current.getHours()+7;
if(day_time<18){//00~17
    document.write(`<img src="img/day.gif" style:"display:block; margin:0 auto">`)
}
if(day_time>=18){
    document.write(`<img src="img/night.gif" style="display:block; margin:0 auto">`)
  }else{
    //w조건없음 if에 해당하지 않는 모든경우
  }