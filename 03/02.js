/* 배열 추가 */
const todos=['우유구매','업무메일확인','필라테스 수업'];
todos.push('햄스터 집청소')//추가한 숫자는 맨뒤에붙음
todos.push('햄스터 밥주기')//추가한 숫자는 맨뒤에붙음
document.write(`<h2>오늘 스케쥴:${todos[4]}</h2>`)

/* 2. 배열 추가 - index 활용한 추가 */
const basket=["삼각김밥","컵라면","마라탕"];
// basket.push('아이스아메리카노1L');
// basket[5]=',,,,,돈없는백수니까 그냥 굶자';
// basket[10]='그만사먹어라';

/* 3. 배열 추가 - length 활용한 추가 */

basket[basket.length]="삼겹살";
basket[basket.length]="오리고기";
basket[basket.length]="소고기";
basket[basket.length]="닭고기";

document.write(`<h3>오늘 점심밥:${basket[2]+basket[3]+basket[10-5]}</h3>`)
