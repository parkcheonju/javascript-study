//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

      //document.addEventListenter("DOMContentLoaded",function(){})
      $(function () {
        //변수
        let list = $("#banner"); //#banner에
        const show_num = 3; //한 장면에 보일개수
        const total = list.find("li").length;//li의 갯수 슬라이드 한개
        const li_width = list.find("li").eq(0).width(); //0번 (1번사진)의 가로길이가져온다
        const copyObj = list.find("li").clone().css("background", "red"); // clone=복제
        list.append(copyObj);
        //append 추가하다copyObj

        //변수선언 끝

        //슬라이드기능 구현시 번호를 저장할 변수를 먼저 만들기
        let num = 0;

        setInterval(autoplay, 2000);
        function autoplay() {
          if (num == total) {
            num = 0;
            list.css("margin-left", 0);
          }
          num++;
          list.stop().animate({ "margin-left": -li_width * num }, 1000);
        }

        $(".next").click(function () {
          if (num == total) {// 3이되면 0으로가게 설정되어있음
            num = 0; //숫자 0이 남겨져있음
            list.css("margin-left", 0);
          }

          num++; // num 0과 아래 num은 다름 num++을 생각해보면 다음 리턴값에서 바뀌기 때문

          list.stop().animate({ "margin-left": -li_width * num }, 700); //이 라인에서의 num은 리턴값이 1로 바뀜

          //위에 지정해놓은 const li_width 불러오기 그런데 반대방향으로 이동해야하니 li 앞에 -추가
          //이후 num을 곱해주면 요소가 무한대로 이동하게됨
          //if문 사용해서 이제 무한대로가는것을 조정해줌
          return false;
        });

        $(".prev").click(function () {
          if (num == 0) {
            num = total; //3
            list.css("margin-left", -li_width * num);
          }
          num--;
          list.stop().animate({ "margin-left": -li_width * num }, 700);
          return false;
        });
      });
      

