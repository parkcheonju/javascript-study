/**/
/*
addEventListener("load",function(){
  var bt=document.querySelector("h1").nextElementSibling;*/
/* 
  bt.onclick=function(){
     //document.querySelector("h1").className="red";
    //document.querySelector("h1").classList.remove('orange','class');
    document.querySelector("h1").classList.toggle('toggle');
    document.querySelector("h1").classList.replace('orange','red');
  }
  document.querySelector("h1").classList.add('bg-orage','orange','class');

 
  document.querySelector("h1").nextElementSibling.classList.add("red");
  document.querySelector("h1").nextElementSibling.nextElementSibling.classList.add("orange");
  document.querySelector("h1").nextElementSibling.nextElementSibling.nextElementSibling.classList.add("bg-orange","white","red");
}) */

//제이쿼리로 바꿔서 다시해보자

$(function () {
  //제이쿼리에서 $("h1").addClass("red").removeClass("red");로 축약할 수 있다.
  var bt = $("h1").next().next().next();
  bt.click(function () {//true false
    if ($(this).hasClass("red")) {//현재에 red 클래스가 있는지 검사
      $(this).removeClass("bg-orange"); // 그럼 현재에 bg-orange를 삭제
    }
  });
  $("h1").addClass("red");
  $("h1").removeClass("red");
  $("h1").next().addClass("red");
  $("h1").next().next().addClass("orange");
  $("h1").next().next().next().addClass("bg-orange white red");
});
