let x=10,y=20,z="10";
document.write(`x >= y : ${x>=y}<br>`);//10 >=20 false
document.write(`x > y : ${x>y}<br>`);//10 >20 false
document.write(`x&lt;= y : ${x<=y}<br>`);//10<=20 true
document.write(`x&lt;y : ${x<y}<hr>`);//10<20 true
document.write(`x!=y : ${x!=y}<br>`);//!->느낌표는 항상 부정 같은지 틀린지 10!=20 true
document.write(`x!=z : ${x!=z}<br>`);//10!="10" false
document.write(`x!==z : ${x!==z}<hr>`);//10!="10" false ==은 깊은 비교, 자료 형태까지 같은지 물어보는것 10 = "10" false
document.write(`x==z : ${x==z}<hr>`);//값이 같냐고 물어본거니까 같음 10 == "10" true 
document.write(`x===z ${x===z} <br>`);//10==="10" false 깊은비교