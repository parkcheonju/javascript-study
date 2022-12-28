/* 
지출내역 - 교통비:3000 식비7000 음료 2000
일일한도-10000 
초과시 금액출력 그렇지 않을경우 참 잘했어요 출력
*/
const price1=3000;//교통비
const price2=7000;//식비
const price3=2000;//음료
const total=price1+price2+price3;
// console.log(price1+price2+price3);
// 12000>10000
const result=total>10000? total-10000+"원 초과" : "참 잘했어요"

document.write(result)

// console.log(price1+price2+price3);
// console.log(total);