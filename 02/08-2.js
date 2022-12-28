let height = prompt("당신의 신장은?", "0");
let weight = prompt("당신의 체중은?", "0");
let bmi =(height-100)*0.9;
let result2=weight>bmi ? "적정몸무게 이상":"적정몸무게 미달"
alert(result2)