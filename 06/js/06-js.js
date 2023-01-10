var sub=document.querySelector(".sub");
//.sub{transition:height .5s;} 제이쿼리라면?
sub.style.transition='height 1s';
sub.style.overflow='hidden';
sub.style.height='0px'; //display 속성으로주지않고 높이값으로 줘보기

document.querySelector(".gnb>li>a").addEventListener(
    'click',function(){
        var k=this.nextElementSibling.style.height;
        if(k==='0px'){
            this.nextElementSibling.style.height='100px'
        }else{
            this.nextElementSibling.style.height='0px'
        }
    }
);


/*
var sub=$(".sub");
sub.css("display","none");
$(".gnb>li>a").click(function(){
    var k=$(this).next(".sub").css("display");
    //console.log(k);
    if(k==='none'){
        $(this).next().slideDown();
    }else{
        $(this).next().slideUp();
    }
})jQuery
*/