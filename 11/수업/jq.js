$(function(){
    let button=$('.gallery a');
    let target=$('#lightbox-overlay');
    let targetImg=target.find('img');
  
    button.click(function(){
      var newImg=$(this).find('img').attr('data-lightbox');

      //변수 oldImg 를 선언후 this 하위 img요소의 src 속성을 할당하시오
      //var oldImg=$(this).find('img').attr('src');

      target.addClass('visible');
      targetImg.attr('src',newImg);

    })
    target.click(function(){
      target.removeClass('visible')
    })
    
  })