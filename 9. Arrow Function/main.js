// // 화살표 함수란?
// // 기본 문법: function 없이 => 로 함수 정의
// const greet = (name) => {
//   console.log("Hello, " + name);
// };

// greet("Eve"); // Hello, Eve

// // 왜 사용하나요?
// // 콜백 함수에 쓰면 더 간결하고 명확
// const numbers = [1, 2, 3];

// // 일반 함수 방식
// const doubled1 = numbers.map(function (n) {
//   return n * 2;
// });

// // 화살표 함수 방식
// const doubled2 = numbers.map(n => n * 2);

// console.log(doubled1); // [2, 4, 6]
// console.log(doubled2); // [2, 4, 6]

// // 일반 함수 → 화살표 함수 변환
// // 일반 함수
// const multiply = function(x, y) {
//   return x * y;
// };

// // 화살표 함수
// const multiplyArrow = (x, y) => {
//   return x * y;
// };

// const multiplyArrowOneLine = (x, y) => x * y; 

// console.log(multiply(4, 5));       // 20
// console.log(multiplyArrow(4, 5));  // 20
// console.log(multiplyArrowOneLine(4,5)); // 20

// // 문법 단축 (한 줄 리턴)
// // 괄호 생략, return 생략
// const square = x => x * x;

// console.log(square(6)); // 36

// const hello = () => console.log("안녕하세요!");

// hello(); // 안녕하세요!


// // 실습 예제
// // Q1. 이름을 받아 "홍길동님 어서오세요" 출력(템플릿 리터럴 사용[` `])
// const welcome = name => console.log(`${name}님 어서오세요`);

// welcome("홍길동"); // 홍길동님 어서오세요

// // Q2. 두 수를 받아 곱한 값을 반환
// const multiply2 = (x, y) => x * y;

// console.log(multiply2(7, 8)); // 56

// // 화살표 함수 vs 일반 함수 – this 비교
// const person = {
//   name: "Eve",
//   greet: function () {
//     console.log("Hi, I'm " + this.name);
//   },
//   greetArrow: () => {
//     console.log("Hi, I'm " + this.name);
//   }
// };

// person.greet();       // Hi, I'm Eve
// person.greetArrow();  // Hi, I'm undefined (this는 전역 → window 또는 undefined)

// 화살표 함수가 적합한 상황
// 콜백에서의 활용
// setTimeout(() => {
//   console.log("콜백에서 실행됨");
// }, 5000);


// 배열 정렬
const numbers2 = [5, 1, 3, 4];
// Array.prototype.sort(compare)에서 
// compare 함수는 두 값 a, b를 비교해서 
// 어느 것이 앞에 와야 하는지를 결정
// compare(a, b)의 리턴값	의미
// 음수 (< 0)	            a가 b보다 앞에 와야 한다
// 양수 (> 0)	            b가 a보다 앞에 와야 한다
// 0	                    순서를 바꾸지 않는다
// 5 vs 1 → 5 - 1 = 4 → 1이 앞으로
// 1 vs 3 → 1 - 3 = -2 → 순서 유지
// 3 vs 4 → 3 - 4 = -1 → 순서 유지
// 정렬 완료 → [1, 3, 4, 5]
numbers2.sort((a, b) => a - b);
console.log(numbers2); // [1, 3, 4, 5]

//리팩토링 예제
// Before
setTimeout(function() {
  console.log("1초 후 실행됩니다");
}, 1000);

// After
setTimeout(() => console.log("1초 후 실행됩니다"), 
                  1000);


// this와 arguments 비교 실습
// 화살표 함수에는 arguments가 없다
const showArgs = () => {
  console.log("+showArgs");
  console.log(arguments); // ReferenceError
  console.log("-showArgs");
};

try {
  showArgs(1, 2, 3);
} catch (e) {
  console.error("화살표 함수에서는 arguments 사용 불가:", e.message);
}


// 일반 함수에서는 가능
function showArgsFn() {
  console.log("+showArgsFn");
  console.log(arguments); // [Arguments] { '0': 1, '1': 2, '2': 3 }
  console.log("-showArgsFn");
}
showArgsFn(1, 2, 3);

function Timer() {
  this.seconds = 0;

  this.timerId = setInterval(() => {
    this.seconds++;
    console.log(this.seconds); // Timer 인스턴스의 this
  }, 1000);
}

const myTimer = new Timer();

// 5초 후 타이머 중단
setTimeout(() => {
  clearInterval(myTimer.timerId);
  console.log("타이머 중단됨");
}, 5000);

console.log("Goodbye");








