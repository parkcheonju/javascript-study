const color=['yellow','red','black','green','basic']
let i=0;

function colorBg(){ //body라는 태그네임 안 "body"태그 객체 안에 0번째
 let bodyTag = document.getElementsByTagName("body")[0];
 bodyTag.style.backgroundColor=color[i];
 i++;
 if(i>=color.length){
    i=0;
 }
 }