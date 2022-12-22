let a = 100; //let a;일때 NaN뜸
a = a + 10;//10 NaN 숫자가 아님 반면 100입력이후엔 정상적으로 출력됨
document.write(`${a}<br>`);
a = a / 10;//11
document.write(`${a}<br>`);
document.write(`a-10=${a - 10}<br>a*10=${a * 10}`);
