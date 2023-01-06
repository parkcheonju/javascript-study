$(function () {
  const visual = $("#brandVisual>ul>li"); // visual은 $("#brandVisual>ul>li"); 로 정의
  const button = $("#buttonList>li"); //button은 $("#buttonList>li"); 정의
  let current = 0; //현재
  let btnIdx = 0; //클릭한 페이저 버튼의 인덱스
  let id; //setIntervalId
  const speed = 3000;
  //버튼클릭함수
  button.click(function () {
    // 클릭시 동작하는요소
    btnIdx = $(this).index();
    button.removeClass("on");
    $(this).addClass("on");
    move();
  });

  //시간마다실행
  timer();
  function timer() {
    // timer()를 정의
    id = setInterval(function () {
      // id의 setInterval() 호출 사이에 고정된 시간 지연으로 함수를 반복적으로 호출하겠다
      let next = current + 1; //0+1 // let next는 current + 1 현재에 + 1이다.
      if (next == visual.length) {
        // 만약 next 값이 visual값의 문자열 코드유닛개수가 같다면 (좌측과 우측의 데이터가 같다면)
        next = 0; //넥스트는 0이다.
      }
      button.eq(next).trigger("click"); // 버튼.인덱스번호에 해당하는것을 찾겠다(next).트리거는 클릭이벤트이다
    }, speed);
  }

  //이동시키는 함수
  function move() {
    // move()를 정의
    if (current == btnIdx) return; // 만약 현재(current)가 btnIdx와 같다면 함수 실행을 종료하고, 주어진 값을 함수 호출 지점으로 반환합니다.
    let cu = visual.eq(current); // visual의 인덱스 번호에 해당하는 (current)는 cu로 정의
    let ne = visual.eq(btnIdx); // visual의 인덱스 번호에 해당하는 (btnIdx)는 ne로 정의
    cu.css("left", "0").stop().animate({ left: "-100%" }); //visual의 인덱스 번호에 해당하는 (current)에 css("left", "0")를 추가하고.멈추겠다. 에니메이션의 값이 ({ left: "-100%" });일때
    ne.css("left", "100%").stop().animate({ left: "0%" }); //visual의 인덱스 번호에 해당하는 (ne)에 css("left", "0")를 추가하고.멈추겠다. 에니메이션의 값이 ({ left: "-100%" });일때
    current = btnIdx; // current(현재)는 btnIdx와 같다
  }
  //clearInterval
  clearAuto();
  function clearAuto() {
    //clearAuto()의 값을 정의하겠다
    $("#brandVisual,#buttonList,.controls").mouseenter(function () {
      // $("#brandVisual,#buttonList,.controls") 이 값 안에있는 마우스가 들어간다면
      clearInterval(id); //(id)호출로 이전에 설정된 시간 제한 반복 작업을 취소하겠다
    });
    $("#brandVisual,#buttonList,.controls").mouseleave(function () {
      //$("#brandVisual,#buttonList,.controls") 이 값 안에있는 마우스가 나간다면
      timer(); // timer();가 실행된다
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //좌우컨트롤버튼
  controls();
  function controls() {
    //controls()의 값을 정의하겠다
    $(".controls .prev").click(function () {
      //$(".controls .prev")에 클릭이벤트가 발생한다면
      btnIdx = btnIdx - 1; //btnIdx = btnIdx - 1; 의 값으로 정의
      if (current == 0) {
        //만약 current이 0과 같다면
        btnIdx = visual.length - 1; // btnIdx = visual.length-1 ;이다
      }
      button.removeClass("on"); // 버튼에 지정되어있는 클래스값 ("on")를 없애고
      button.eq(btnIdx).addClass("on"); // 버튼에 인덱스 번호에 해당하는 값 (btnIdx)에 클래스 ("on");를 추가하겠다
      let cu = visual.eq(current); // visual 인덱스 번호에 해당하는값 (current)는 cu로 정의
      let pr = visual.eq(btnIdx); // visual 인덱스 번호에 해당하는값 (btnIdx)는 pr로 정의
      cu.css("left", "0").stop().animate({ left: "100%" }); //visual의 인덱스 번호에 해당하는 (current)에 css("left", "0")를 추가하고.멈추겠다. 에니메이션의 값이 ({ left: "-100%" });일때
      pr.css("left", "-100%").stop().animate({ left: "0%" }); //visual의 인덱스 번호에 해당하는 (ne)에 css("left", "0")를 추가하고.멈추겠다. 에니메이션의 값이 ({ left: "-100%" });일때
      current = btnIdx; // current(현재)는 btnIdx와 같다
    });
    $(".controls .next").click(function () {
      //$(".controls .next")는 클릭이벤트시
      btnIdx = btnIdx + 1; // btnIdx = btnIdx + 1;다
      if (btnIdx == visual.length) {
        // 만약 next 값이 visual값의 문자열 코드유닛개수가 같다면 (좌측과 우측의 데이터가 같다면)
        btnIdx = 0; // btnIdx = 0;이다
      }
      button.removeClass("on"); // 버튼에 클래스값 ("on"); 을 지우고
      button.eq(btnIdx).addClass("on"); // 버튼에 인덱스 번호에 해당하는 값 (btnIdx)에 클래스 ("on");를 추가하겠다
      let cu = visual.eq(current); // visual 인덱스 번호에 해당하는값 (current)는 cu로 정의
      let ne = visual.eq(btnIdx); // visual 인덱스 번호에 해당하는값 (btnIdx)는 pr로 정의
      cu.css("left", "0").stop().animate({ left: "-100%" }); //visual의 인덱스 번호에 해당하는 (current)에 css("left", "0")를 추가하고.멈추겠다. 에니메이션의 값이 ({ left: "-100%" });일때
      ne.css("left", "100%").stop().animate({ left: "0%" }); //visual의 인덱스 번호에 해당하는 (ne)에 css("left", "0")를 추가하고.멈추겠다. 에니메이션의 값이 ({ left: "-100%" });일때
      current = btnIdx; // current(현재)는 btnIdx와 같다
    });
  }
}); //jQuery
