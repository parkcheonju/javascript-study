//1뎁스 A를 변수에 할당
let gnbLia=document.querySelectorAll(".gnb>li>a");
const aH=document.querySelector(".sub>li>a").clientHeight;
for(let i=0; i<gnbLia.length; i++){
    let item1=gnbLia[i]
    item1.addEventListener('click',function(){
        let tg=this;
        let allSub=document.querySelectorAll(".sub");
        let tg_suv=tg.nextElementSibling;
        for(let j=0; j<allSub.length; j++){
            let item2 = allSub[j];
            item2.style.height="0px";
            for(let k=0; k<4; k++){
                tg_suv.style.height=aH*k+"px";
            }
        }
    })
};

/* 1번, querySelectorAll로 li 값 잡아서 가져오기
//1뎁스 A를 변수에 할당
let gnbLiA = document.querySelectorAll(".gnb>li>a");
//clientHeight 패딩포함
const aH = document.querySelector(".sub>li>a").clientHeight;

for (let i = 0; i < gnbLiA.length; i++) {
	let item1 = gnbLiA[i];
	item1.addEventListener("click", function () {
		let tg = this;
		let allSub = document.querySelectorAll(".sub");
		let tg_sub = tg.nextElementSibling;
		let tg_aH = tg_sub.querySelectorAll("li");
		for (let j = 0; j < allSub.length; j++) {
			let item2 = allSub[j];
			item2.style.height = "0px";
			for (let k = 0; k < tg_aH.length; k++) {
				tg_sub.style.height = aH * tg_aH.length + "px";
			}
		}
	});
}
*/
/*
내가 해결한방식은 for문 추가중첩으로 단순히 나와야하는 갯수가 3개기때문에 확장성 없이 작성했지만 (좋은코드아님)
선생님은 querySelectorAll로 li값을 가져와서 계산하셨다, 뿐만아니라
다른학생은 lastChild, 또 다른학생은 css의 line-height를 수정하는식으로 고치는등, 해결방법이 다양했다.
*/
