//데이터형 활용
//문자 자료형 string
//let x; 
//let y; 한번에 쓴거와 같음
let x,y;
x=7+5;
y="7"+5;
//document.write(x+y)
document.write(x)//12
document.write(y)//글자7 글자 5
document.write("<br>")
document.write("y")//글자7 글자 5
/* 자바스크립트에서 표현식을 작성할 때 문자는 따옴표로 묶고 변수나 숫자는 안묶는다 (의미가 달라진다) */
/* 자바스크립트에서는 태그도 문자열 */
//메서드-> 임자 있는 함수
const wakeup="일어나라";
document.write('<h1 style="color:#ddd">',wakeup,'</h1>');
document.write('<h1 style="color:#ddd">' + wakeup + '</h1>');

//es6 에 추가된 템플릿 리터럴
//숫자 1 왼쪽 `` 입력
const sleep="자라?";
document.write(`<h1 style="color:red">${sleep}</h1>`);