/* 1- 객체 생성 */
let dog=new Object();
dog={
    /* 키 : value */
    name:"망고",
    features:"말티즈"
};
//arr(배열자료형).length(글자 갯수를 세줌, 04번 폴더 내부 슬라이드 프로젝트들에서 사용했음)
console.log(dog.name);
document.write(dog.name);
document.write(`<h1>${dog.name}</h1>`);

/* 2- 객체 생성 (리터럴 literal) */
const baby={name:"망고",features:"말티즈"};
document.write(`<h2>${baby.features}</h2>`);

/* 3- 매서드(method) */
// const pet={};
const pet={
    //객체 안에서의 this는 객체를 가르킨다. 이 함수의 this의 경우 pet이다.
    name:"망고",
    eat:function(food){
    document.write(`<h3>${this.name}는 ${food}를 좋아해요</h3>`);
    }
};

pet.eat("연어");
pet.eat("닭가슴살");
