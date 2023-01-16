const container=document.querySelector(".container");
const child=document.querySelector(".child");
const containerW=container.clientWidth;
console.log('container의 clientWidth:', containerW);
//get <-읽기전용 자료라 직접변경안됨
//set <-
let childStyle=Number(window.getComputedStyle(child).getPropertyValue('padding-left').split('px',1)[0]);//px문자 기준으로 1개 잘라낸 뒤, 0번째 취득 console.log(childStyle);

const calc=containerW-childStyle;
console.log(calc);
//child.style.width=calc;

let pseudo=window.getComputedStyle(child,":before").content;

console.log(pseudo);