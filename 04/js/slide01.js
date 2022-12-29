$(function () {
	const visual = $("#brandVisual>ul>li");
	const button = $("#brandVisual>ul>li");
    let current = 0; // current현재 보고있는것
    let id; //setIntervalId
    const speed=3000;
    //버튼클릭함수
    button.click(function(){});

    //시간마다실행
    timer();
    function timer(){
        setInterval(function(){
            let next=current+1;

            if(next==visual.length-1){
                next=0;
            }
            move(next);
            //console.log(current++)
        },speed);
    }

    //이동시키는 함수
    function move(next){
        console.log("next"+next);
        let cu=visual.eq(current);//cu=current를 줄여서 적은것
        let ne=visual.eq(next)
        cu.css('left','0').stop().animate({left:"-100%"});
        ne.stop().animate({left:"0%"});
    }

}); //jQuery 배열자료형으로 받아온다.

/*document.addEventListener("DOMContentLoaded", function () {
	const visual = document.querySelector("#brandVisual>ul>li");
	visual.style.backgroundColor = "white";
}); 
*/
