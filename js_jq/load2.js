addEventListener("DOMContentLoaded", () => {
  let book1 = document.querySelector("#book1");
  let book2 = document.querySelector("#book2");
  const url = "./book.html";
  let request = new XMLHttpRequest();
  request.open("GET", url);
  
  request.responseType = "document";
  //responseType <- document 타입 전체를 가져온다
  request.onload = function(){
    let response = request.responseXML;
    let ids = response.querySelectorAll("[id]");

    book1.innerHTML = ids[0].innerText;
    book2.innerHTML = ids[1].innerText;
  };
  request.send();
});
