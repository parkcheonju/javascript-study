let star="";
for(i=1; i<10; i++){
    for(let j=0; j<i; j++){
        star = star += "*";
    }
    star = star + "<br>"
}
document.write("<br>"+star)