/* 대화상자만들어보기 */
/***
 * 1. alert 경고창 함수
 * 2. confirm
 * 3. prompt
 * ** */
var num1=30;
//var num1=30-20;
var num2=20;
num1=50;
num1>=num2?alert("참일경우"):alert("거짓일경우");

var result=confirm("자바스크립트를 좋아하세요?");
console.log(result)
var theText=result ? "네":"아니오";
document.write(theText);

var input=prompt("생년월일을 입력하세요","1234")
document.write(input)