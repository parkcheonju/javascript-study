$(function(){
    $.ajax({
        url:'./MOCK_DATA.json',//파일위치
        dataType:'json',//파일형식
        success:function(data){//ajax통신 성공시 사용할 콜백함수
            if(data.length>0){//데이터가 있을경우
                let tb=$("<table />")
                for(var i in data){
                    var $id=data[i].id;
                    var $first_name=data[i].$first_name;
                    var $last_name=data[i].$last_name;
                    var $email=data[i].$email;
                    var $gender=data[i].$gender;
                    var row=$('<tr/>').append(
                        $('<td/>').text($id),
                        $('<td/>').text($first_name),
                        $('<td/>').text($last_name),
                        $('<td/>').text($email),
                        $('<td/>').text($gender)
                    )
                    tb.append(row)
                }           
                $('.wrap').append(tb)
            }
        }
    })
  })