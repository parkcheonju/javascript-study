/* swich */
/* 조건 case: */
// let day="월";
// day="금"
// document.write(day+"요일에는")
// switch(day){
//     case "월" :document.write("오전 10시 수업 시작")
//     break;
//     case "화" :document.write("<br>오후 2시 수업 시작")
//     break;
//     case "수" :document.write("<br>오후 5시 수업 시작")
//     break;
//     case "목" :document.write("<br>오전 6시 수업 시작")
//     break;
//     case "금" :document.write("<br>오전 11시 수업 시작")
//     break;
//     default:document.write("월요일에서 금요일까지만 입력하세요")
// }
/* 사용자로부터 숫자를 입력받아 짝수인지 홀수인지 숫자가 이닌지를 출력하시오*/
// const input = Number(prompt("숫자를 입력하세요", "숫자"));
// //나머지가 0 false 나머지가 1 true
// switch (input % 2) {
//   case 0:
//     alert("짝수입니다");
//     break;
//   case 1:
//     alert("홀수입니다");
//     break;
//   default:
//     alert("숫자가 아닙니다");
// }
// if(input%2==0){
//     alert("짝수")
//   }else if(input%2==1){
//     alert("홀수")
//   }else{
//     alert("숫자가 아닙니다");
//   }

/***
 * 두 수의 크기 비교
 *
 *
 */

// const a = Number(prompt("첫번째숫자",""))
// const b = Number(prompt("두번째숫자",""))
// if(a>b){ //두번째가 더 큰경우, 두수가 같은경우
//     alert("첫번째숫자가크다")
// }else if(a==b){
//     alert("두 수가 같습니다")
// }else{
//     alert("두번째숫자가크다")
// }
// alert("b가크다")
/***
 * 3의 배수확인
 *
 */
let userNum = prompt("숫자를 입력하세요");
//1. 3의 배수인지를 확인하여 결과를 alert로 출력
//userNum==null 사용자가 아무것도 입력안한경우
if (userNum !== null) { //사용자가 입력한경우
  if (userNum % 3 == 0) {
    alert("3의 배수입니다");
  } else {
    alert("3의 배수가 아닙니다");
  }
}else{
    alert("입력이 취소되었습니다")
}
console.log(userNum);
//2. 사용자가 아무것도 입력하지 않은 경우 입력이 취소되었습니다 출력
//사용자가 아무것도 입력하지 않은경우 null
//위의 문장을 if else 삼항연산자를 사용하여 작성
/****
 * if(조건){
 * 
 *  (조건식)?(조건이참일때 실행문) : (조건이 거짓일 때 실행문)
 *  * }else{
 * }
 * */

if(userNum !==  null){
    (userNum % 3 === 0) ? alert("3의 배수입니다") : alert()
}else{
    alert("입력이 취소되었습니다")
}