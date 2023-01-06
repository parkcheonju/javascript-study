// 오늘 한 자바스크립트 제이쿼리로 해보기
$(function () {
  //id 선택
  //document.getElementById("one").style.background = "yellow";
  $("#one").css("background", "yellow"); // 직접 요소에 함수적용

  ////////////////////////////////////////////////////////////////

  var el1 = $("#one"); //변수에 저장해놓고
  el1.css("color", "red"); //변수에 css메서드를 적용

  ////////////////////////////////////////////////////////////////

  var el2 = $("li");
  $("li").css("background", "pink");
  //console.log(el2[1]); // 배열형태로 나온다
  //el2[1].css("color","red"); // 오류가 나온다 왜냐하면 자바스크립트 언어라 찾지 못한다
  $(el2[1]).css("color", "red"); // 제이쿼리 객체로 만든다
  //배열중 특정번째만 적용
  el2.eq(1).css("color", "blue"); //제이쿼리 메서드를 사용해서 선택
  //제이쿼리 반복문 each
  el2.each(function (a, b, c) {
    console.log(a, b, c);
    el2.eq(a).css("background", "blue");
    $(b).css("color", "white");
  });
  var el3 = $(".highlight");
  el3.eq(1).css({ width: "500px", margin: "auto", background: "pink" }); //key(적용할것):밸류(무엇을?에 해당) 추가할때마다 ,로 추가함
});
