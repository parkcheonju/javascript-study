/*==============================================================================================*/

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

const item=["사과","배","한라봉","바나나"];
document.write(`원래 배열:${item}<br>`);
/* 인덱스 번호로 제거 splice(시작할 인덱스 번호,삭제할 요소의 갯수) */
item.splice(2,1); // 2번부터 1개삭제 라는뜻
document.write(`원래 배열:${item}<br>`); // 때문에 "한라봉" 이 삭제됨
item.splice(2,1) ;
document.write(`원래 배열:${item}<br>`);// "한라봉"이 삭제되고 난 이후 한번더 0,1,2중 2번자리에 있는 "바나나"를 추가로 삭제하게됨

/*==============================================================================================*/

const animals=['강아지','고양이','보노보노','곰'];
document.write(`<p>동물은 ${animals} 입니다</p>`);
/* indexOf() 값이 있으면 index 번호를, 없으면 -1을 반환하는 함수 */
const index=animals.indexOf('보노보노');
console.log(index)

//보노보노 삭제 후 animals 를 화면에 출력
animals.splice(index,1)
document.write(`<p>동물은 ${animals} 입니다</p>`);
//스폰지밥을 마지막 배열로 추가후 화면에 출력
//animals[animals.length]=" 명예 동물 스폰지밥";
animals.splice(animals.length,0,'스폰지밥');
document.write(`<p>동물은 ${animals} 입니다</p>`);