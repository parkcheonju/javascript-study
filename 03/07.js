/* 자리배치도 */
/* 총 입장객과 한 줄에 앉을 인원을 입력받아 좌석 배치도를 출력하는 프로그램을 만드시오 */

//전체 입장객
var memNum = prompt("입장객은 몇명인가요?");
//한줄에 앉을 사람
var colNum = prompt("한 줄에 몇명씩 앉습니까?");

if (memNum % colNum === 0) {
	//tr
	rowNum = parseInt(memNum / colNum);
} else {
	rowNum = parseInt(memNum / colNum) + 1;
}
document.write("모두"+rowNum+"개의 줄이 필요합니다")