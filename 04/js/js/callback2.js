const 테스트=function(콜백함수){
    for(let i=0; i<5; i++){
        콜백함수(i)
    };
}

const 함수=function(ㅎㅇ){
    document.write(`<h1>${ㅎㅇ}번째 안녕하세요</h1>`)
}
테스트(함수);


