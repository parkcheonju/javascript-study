//fuction mango(){}
/* 익명함수, 이름없는 함수 */
const mango = function () {
  document.write("망고<br>");
  document.write("망고<br>");
  document.write("망고<br>");
};
console.log(typeof mango);
console.log(mango, document.write);
mango();

//매개변수 있는것
const sum = (function (a, b) {
  let c = a + b;
  document.write(`<h1>${c}</h1>`);
})(
  //sum(1,2);

  /* 즉시실행함수 */
  (function () {
    document.write(`<h1>즉시실행함수</h1>`);
  })()
);

// 맨 뒤에 ()를 넣어야 보인다?
(function (x, y) {
  document.write(x + y);
})(10, 20);

/* 화살표 함수, 람다함수 */
/* 익명 함수를 줄여서 씀 */
//const hi = function () {
//  return "안녕하세요";
//};

//const hi = ()=>{
//    return "안녕하세요";
//};
//alert (hi());

const hi = ()=>
    "안녕하세요";
alert (hi());

//실행문이 한줄일경우 {}와 그 안에있는 return도 축약할수있다.

/* 인자가 있는 화살표 함수 */
let sum1=(a,b)=>{
    return a+b
};
document.write("두 수의 합"+sum1(30,20));