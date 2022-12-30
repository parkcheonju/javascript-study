//for(초기값; 조건식; 증감식){}
//var i=0;
// 5<5  //5=4+1
//for (i = 0; i < 5; i++) {
	//i=0,i=1,i=2,i=3,i=4
	//document.write(`<br>${i}번째 반복입니다<br>`);
//}
//document.write(`<br>끝<br>`);

//for (i = 6; i >= 1; i--) {
  //document.write(`<h${i}> h${i} 재미있는 자바스크립트</h${i}>`)
  //document.write("<h"+i+">h"+i+"재미있는 자바스크립트</h"+i+">")
//}
//구구단5단
let i=5;
for(let j=1; j<=9; j++){
  let result="<br>"+i+"x"+j+"="+ i*j+"<br>";
  document.write(result)
}
// 2의 배수?
var k;
var n = 10;
var sum = 0;
//3<= 10  //k(3)=k(1)+1
for (k = 1; k <= n; k++) {
	if (k % 2 === 1) {
		continue; //통과
	}
	console.log(k); //1,2,3,~10
  //sum=sum+k;
  sum+=k;
  document.write("<hr>"+sum);
}