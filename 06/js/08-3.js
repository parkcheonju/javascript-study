//section 변수에 담기
const section = document.querySelector("section");
//변수에 담아야할것들
const text = document.querySelector(".txt");

const progressBar = document.querySelector(".bar");
//창높이
const windowHeight = window.innerHeight;
//스크롤양을 담을 변수
let scrollTop;

window.addEventListener("scroll", function () {
  scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;

  let scrollHeight = section.clientHeight;
  let scrollRealHeight = scrollHeight - windowHeight;

  let scrollPercent = (scrollTop / scrollRealHeight) * 100;
  text.textContent = Math.floor(scrollPercent) + "%";
  progressBar.style.width = Math.floor(scrollPercent) + "%";
});
