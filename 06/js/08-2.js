let section = $("section");
const text = $(".txt");
const progressBar = $(".bar");
const windowHeight = $(window).height();
let scrollTop;
//퍼센트 계산

function getPercent(sct){
	let scrollHeight = section.height();
	let scrollRealHeight = scrollHeight - windowHeight;
	let scrollPercent = ((sct / scrollRealHeight) * 100);
	let textPercent = Math.floor((sct / scrollRealHeight) * 100);
	if (scrollPercent >= 100) {
		scrollPercent = 100;
	}
	render(scrollPercent,textPercent);	//argument , 인자,인수
}
//화면에 출력

function render(scrollPercent,test) {
	text.text(test + "%");
	progressBar.css("width", scrollPercent + "%");
}

//스크롤 감지
$(window).scroll(function () {
	scrollTop = $(this).scrollTop();
	getPercent(scrollTop);
});
