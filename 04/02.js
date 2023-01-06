/* 
    let ~~~ = ~~ 선언부 
    fuction 함수 이름 (//매개변수 parameter) {//실행문 }

    * 실행문
    함수이름 (//인자 argument)
*/
function h2(){
    //안녕하세요를 400번 출력
    for(let i=1; i<=4; i++){
        document.write(`<h2>안녕하세요 ${i}번째 출력입니다</h2>`);
    }
}
h2();

function h3(a,b){
    for(let i=1; i<=4; i++){
        document.write(`<h3>${a} ${i}번째 방문입니다.</h3>${b}`);
    }
}
h3("반갑습니다","고객님");