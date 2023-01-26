$(function(){
    $.ajax({
      url:"news.php",
      dataType:"xml",
      success:function(data){
        //console.log(data);
        //콘솔로 찾아보니 data에 item이 우리가 필요한 기사정보
        var $items=$(data).find('item');
        //console.log($item) 결과값 확인
        if($items.length>0){
            $items=$items.slice(0,10);//[0]~10개 선택하겠다
            //console.log($items)
            var $ul=$('<ul />');
            //$items.each(function(i,o){})
            $.each($items,function(i,o){
                //console.log(i,o)
                var $title=$(o).find('title').text();
                //console.log($title)
                var $link=$(o).find('link').text();
                //console.log($link) 오류발생 php에대한 공부후 a태그 작성
                var $aTAG=$('<a />') //attr로 속성 작성
                $aTAG.attr({'href':$link,'target':'_blank'})
                $aTAG.text($title)
                var $li=$('<li />');
                $li.append($aTAG)
                $ul.append($li)
            })
            $('.wrap').append($ul)
        }
      }
    })
  })