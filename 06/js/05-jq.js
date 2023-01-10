const textZone = $("#textZone");
const btn1 = $("#btn1");
btn1.click(function () {
  textZone.css("color", "blue");
});

const btn2 = $("#btn2");
//method chaning
btn2.mouseover(function () {
  textZone.css("color", "red");
});
btn2.mouseleave(function () {
  textZone.css("color", "yellow");
});
btn2.focus(function () {
    textZone.css("color", "blue");
  });
//focus는 입력 1번만 되는 이유를 찾아보자

const btn3=$("#btn3");
/*
btn3.mouseover(function(){
  textZone.css("color", "green");
  textZone.css("background-color", "red");
})
btn3.focus(function(){
  textZone.css("color", "green");
  textZone.css("background-color", "red");
})
*/

/*
mouseover(function(){
    textZone.css("color", "green");
    textZone.css("background-color", "red");
})
btn3.focus(function(){
    textZone.css("color", "green");
    textZone.css("background-color", "red");
}) 
*/

/* 다른이벤트에 같은 실행문적용
btn3.on("mouseover focus",function(){
    textZone.css("color", "green");
    textZone.css("background-color", "red"); 
}) 
*/
// 이벤트도 다르고 실행문도 다를때 ,<- 배열일때사용함 ->:로
btn3.on({
    "mouseover focus":function(){
    textZone.css("color", "green");
    textZone.css("background-color", "red"); 
},
"click":function(){
    alert("click");
    textZone.css("margin-left","80px");
}
})
$("#listWrap").hover(
    function(){
        $(".list1").css("display","block");
    },
    function(){
        $(".list1").css("display","none");
        $(this).css("background","blue");
        console.log(this)
    }
);