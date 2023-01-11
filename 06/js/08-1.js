/** 다시 제작하면서 이해하기 
 * 필요한 것
 * 1. 문서의 높이 (높이가 있는 컨텐츠를 찾기 body 아님) / <section>
 * 2. text 그래프
 * 3. progressBar수치를 나타나는 텍스트 요소 
 * 4. 모니터의 창의높이(윈도우의,높이값<-해당하는걸 입력)
 * 5. scrollTop 비어있는 변수
 */
const 문서높이=document.querySelector('section');
const 그래프=document.querySelector('.txt');
const 그래프수치=document.querySelector('.bar');
const 모니터의높이=window.innerHeight;
let scrollTop;

/** 윈도우한테 스크롤 이벤트 발생 시 스크롤 버튼이 화면 상단에서 떨어진 거리에 빈변수에 할당
 * 
 * 내가 몰랐던것 ->document와 window의 차이<-어디서 가져온건지 인지를못했음
 * 
 * 1. window.addEventListener에 스크롤 이벤트 함수작성 시작
 * 
 * 2. 아까 작성한 scrollTop변수불러와서 윈도우의 세로값 할당
 * 
 * 3. 왜 왜부에서 변수 만들어놓은걸 불러서 하느냐? 위에서 아래로 내려오는 로직에 이벤트 발생시 기능을 발생시켜야하는데 내부에 있으면 할당된 값이 없기 때문에(재료가 없기떄문에) 외부에 변수할당을 시켜준다, 내부에 변수 할당된다.
 * 
 * 4. scrollRealHeight(현재 진짜 스크롤 세로값) = scrollHeight[스크롤한 세로값]-windowHeight[윈도우창(변치않는 고정값)의 세로값]
 * 
 * 5. scrollHeight와 windowHeight를 변수로 잡아서 scrollRealHeight의 값을 구해야함
 * 
 * 6. scrollPercent=(부분[구해놓은 scrollTop]/전체[scrollRealHeight])*100
 */

window.addEventListener("scroll",function(){
    //외부에 만든 변수 scrollTop에 윈도우 세로값에 해당하는(window.scrollY)할당
    scrollTop=window.scrollY;
    //console.log(scrollTop); 콘솔로그로 할당된 값 있는지 체크
    let scrollHeight=문서높이.clientHeight;
    let scrollRealHeight=scrollHeight-모니터의높이;
    let scrollPercent=(scrollTop/scrollRealHeight)*100;
    if(scrollPercent>=100){
        scrollPercent=100;
    };
    그래프.textContent=Math.floor(scrollPercent)+"%";
    그래프수치.style.width=Math.floor(scrollPercent)+"%";
})


