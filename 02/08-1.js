/* prompt 메서드를 활용하여 국어, 영어, 수학 점수를 입력 받으세요.
평균이 70점 이상이고 각 과목별 점수가 60점 이상이면 true를 아니라면 false를 출력합니다. */

let kor = Number(prompt("국어점수는?", "0"));
let eng = Number(prompt("영어점수는?", "0"));
let math = Number(prompt("수학점수는?", "0"));
let avg = (kor + eng + math) / 3;
let result = avg >= 70 && kor >= 60 && eng >= 60 && math >= 60;
document.write(`<h1>${result}</h1>`)