//원뎁스 A를 변수 gnbLiA 할당
let gnbLiA = $(".gnb>li>a");
//outerHeight() border,padding 포함해서 찾아주는값
let aH = $(".sub>li>a").outerHeight()-4; // 길이가 안맞아서 크기 조절
let check=false;

gnbLiA.click(function () {
    //지금은 on 클래스가 없는상태
    //전역변수로 임의의 감지할수 있는값 (불값 논리자료값) 선언한다
    $('.sub').css("height", "0px");
    $(this)
    .next()
    .css("height", aH * 4 + "px");
    
	//if (check == false) {} <- 일단 보류
    //토글로 만들기
	//if 는 (true)
	function toggle() {
		if (!$(this).next().hasClass("on")) {
			$(".sub").removeClass("on");
			$(this).next().addClass("on");
		} else {
			$(this).next().removeClass("on");
		}
	}
});

/*
gnbLiA.click(function(){
    //클래스 삭제는 removeClass('on')
    //클래스 추가는 addClass('on')
    //1. 전부 지우고 붙이기
    //$('.sub').removeClass('on');
    //$(this).next().addClass('on');
    //토글로 만들기
    //if 는 (true일때 실행)
    function toggle(){
    if($(this).next().hasClass('on')!==true){
        //console.log($(this).next().hasClass('on')!==true)
        $('.sub').removeClass('on');
        $(this).next().addClass('on');
    }else{
        $(this).next().removeClass('on');
    }
    //console.log($(this).next().hasClass('on')==true);
    }

});
*/