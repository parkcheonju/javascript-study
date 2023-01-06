for (let i=0; true; i++){

    //무한반복
    alert(i+"번째 반복입니다")

    const iscontinue=confirm("계속하시겠습니까?");

    if (!iscontinue){
        //break;
        continue;
    }
}
document.write("반복문 종료")