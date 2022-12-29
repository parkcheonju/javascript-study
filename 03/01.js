/* ==== 배열의 선언1 - 빈배열 선언 후 값 할당  ====*/
let str=[]; 
// [] 배열을 사용하겠다 라고 지정함
// 자바스크립트는 문자형은 배열로 다룸
str='퇴사한사람 공부한다'; 
document.write(str);
document.write(str[6]+str[7]+'<br>'+str[6]+str[str.length-3]+'<hr>');
//배열의 총 길이
document.write(str.length)//10 여기서 3을 빼게되면 str[7]과 같음
/* === 배열의 생성2 ==== */
const arr=[];
arr[0]='우';
arr[1]='영';
arr[2]='그';
arr[3]='만';
arr[4]='자';
arr[5]='아';
// arr[2]='우';
console.log(arr)
console.log(arr[0]+arr[1]+arr[5]+arr[2]+arr[3]+arr[4])
/*======================================== */

const arr1=[273,'String',true,function(){},{},[273,106]]
document.write(arr1.length)
console.log(arr1);

/*======================================== */

const arr2=[,,,]
arr2[1]="망";
console.log(arr2);

/*=============== 3 - 배열생성 =================== */

const arr3 = new Array(1,2,3);
console.log(arr3.length);
console.log(arr3[arr3.length-2+1]);

/*======================================== */

const arr4 = new Array(3);
console.log(arr4);

/*======================================== */

const fruits=['배','사과','키위','바나나']
fruits[4]='소세지' //const로 지정했어도 배열에 있는 자료의 값을 바꾸는것이 가능하다
// 화면에 fruits 총 길이를 출력하세요
document.write('<hr>'+'과일의 총 개수는'+fruits.length+'개 입니다')
document.write('<hr>'+'먹은 과일은 왼쪽에서 '+fruits[2].length+'번째 배치되어있는 과일 입니다.')
document.write('<hr>'+'먹은 과일의 이름은 '+fruits[1]+'입니다')
document.write('<hr>'+'오늘 먹은 과일은 '+fruits+'입니다 그중 가장 맛있게 먹은 것은 '+ fruits[4] +' 입니다.')