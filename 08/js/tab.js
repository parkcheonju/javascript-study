/* 
.tab-wrapper 버튼과 패널의 부모가 2개가 되서 변수를 하나 더 잡고 변경해주기
.tab-menu 버튼그룹 >a 요소
.tab-content 패널그룹>div 요소
*/

var tabWrapper = $(".tab-wrapper");
//each를 사용하기
tabWrapper.each(function(){
	var currentEl=$(this);
	//current 현재 라는의미
	var menus = currentEl.find(".tab-menu a");
	var panels = currentEl.find(".tab-content>div");

	menus.eq(0).addClass("active");
	panels.eq(0).show();
	//브라우저 이벤트 종류 -> event handler->event object(이벤트가 발생한 대상의 정보를 가진 객체)

	menus.click(function (e) {
		e.preventDefault();
		let tg = $(this);//this 이벤트가 발생한 요소
		let currentLink = tg.attr("href");
		menus.removeClass("active");
		tg.addClass("active");
		panels.hide();
		$(currentLink).show();
	});

});
