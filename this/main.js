// 전역 함수에서의 `this`
function globalFunction() {
  console.log(this);
}
globalFunction(); // 브라우저에서는 window, strict mode에서는 undefined

// 객체 메서드에서의 `this`
const person1 = {
  name: "아무나1",
  greet() {
    console.log(this.name);
  }
};
person1.greet(); // "홍길동"


// 객체 메서드를 변수에 할당하면?
const person2 = {
  name: "아무나2",
  greet() {
    console.log(this.name);
  }
};

const greetFunc = person2.greet;
greetFunc(); // undefined (strict mode) 또는 window.name

// 화살표 함수에서의 `this`
const person3 = {
  name: "아무나3",
  greet: () => {
    console.log(this.name);
  }
};
person3.greet(); // undefined

// 메서드 내부의 화살표 함수
const person4 = {
  name: "아무나4",
  greet() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};
person4.greet(); // "아무나4"

// 생성자 함수에서의 `this`
function User(name) {
  this.name = name;
}
const u = new User("유저1");
console.log(u.name); // "유저1"

// call/apply/bind 사용
function sayName() {
  console.log(this.name);
}

const user = { name: "유저2" };

sayName.call(user);  // "유저2"
sayName.apply(user); // "유저2"

const bound = sayName.bind(user);
bound();             // "유저2"

