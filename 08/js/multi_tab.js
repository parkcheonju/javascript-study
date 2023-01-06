/* 
.tab-menu 버튼그룹 > a 요소
.tab-content 패널그룹>div 요소
*/

var menus=$(".tab-menu a");
var panels=$(".tab-content>div");
menus.eq(0).addClass("active");
panels.eq(0).show();
//브라우저 이벤트 종류 -> event handler -> event object(이벤트가 발생한 대상의 정보를 가진 객체)
menus.click(function(e){
    //e 이벤트객체 클릭시 이벤트 발생하는 로직
    e.preventDefault();
    let tg=$(this);
    let currentLink=tg.attr("href"); 
    //tg.attr("href"); 이후 어떤 속성을 선택할건지 
    //console.log(currentLink); //보이는 함수는 show() 숨기는 함수는.hide
    menus.removeClass("active");
    tg.addClass("active");
    panels.hide();
    $(currentLink).show();

});
