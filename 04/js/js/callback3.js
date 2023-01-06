const tg=function(배열,콜백함수){
    for(const 값 of 배열){
        콜백함수(값)
    }
};
const 함수=function(콜백매개변수){
    document.write(`${콜백매개변수}뭔말이지?`)
};
tg([51,113212,5544,2886],함수);