let x=1;
// 후위연산자 x++
document.write(x++); // x=x+1 // 1(2)=1+1
document.write('<br>');
document.write(x);
document.write('<br>');
document.write(x++);
document.write('<br>');
document.write(x);
document.write('<br>');
document.write(x++);
document.write('<br>');
document.write(x++);
document.write('<br>');
document.write(x);

//전위연산
x=1;
document.write('<hr>', ++x);//2
document.write('<br>', ++x);//2=x+1
document.write('<br>', ++x);//2(3)=x+1
document.write('<br>', ++x);//2(4)=x+1
document.write('<hr>', x++)//x=x+1 5(6)=5+1
// document.write('<hr>', x++)//6(7)=6+1

/* ========================== */

let y=1;
document.write(`<h1>${y--}<br>${y}<br>${--y}</h1>`); //y=y-1 // 1=1-1(0)
document.write(`<h1>${y--}</h1>`);