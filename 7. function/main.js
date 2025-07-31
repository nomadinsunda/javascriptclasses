// // 1. 함수 선언문
// function greet(name) {
//   return `안녕하세요, ${name}님!`;
// }
// console.log(greet("철수"));

// // 2. 함수 표현식
// const sayBye = function() {
//   console.log("Goodbye!");
// };
// sayBye();

// // 3. 화살표 함수
// const add = (a, b) => a + b;
// console.log(add(3, 4));

// // 4. 디폴트 파라미터
// function greetGuest(name = "손님") {
//   console.log(`안녕하세요, ${name}`);
// }
// greetGuest();

// // 5. rest 파라미터
// function sum(...numbers) {
//   return numbers.reduce((acc, n) => acc + n, 0);
// }
// console.log(sum(1, 2, 3, 4, 5));

// // 6. 반환값
// function square(x) {
//   return x * x;
// }
// console.log(square(5));

// // 7. 콜백 함수
// function processUserInput(callback) {
//   const name = "영희";
//   callback(name);
// }
// processUserInput(function(name) {
//   console.log(`환영합니다, ${name}님`);
// });

// // 8. 고차 함수
// function multiplier(factor) {
//   return function(number) {
//     return number * factor;
//   };
// }
// const double = multiplier(2);
// console.log(double(10));

// // 9. 즉시 실행 함수 (IIFE)
// (function(hello) {
//   console.log(`즉시 ${hello} 실행됨!`);
// })("world");

// // 10. 클로저
// function makeCounter() {
//   let count = 1;
//   return function() {
//     count++;
//     return count;
//   };
// }
// const counter = makeCounter();
// const counter2 = makeCounter();
// console.log(counter()); // 2
// console.log(counter2()); // 2
// console.log(counter());

// // 11. 재귀 함수
// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));

// 12. this: 일반 함수 vs 화살표 함수
const obj = {
  value: 100,
  method() {
    console.log("일반 함수 this:", this.value);
  },
  arrow: () => {
    console.log("화살표 함수 this:", this.value);
  }
};
obj.method();
obj.arrow();

// 13. arguments 객체
function showArguments() {
  console.log(arguments);
}
showArguments(1, 2, 3);

// 14. 이름 있는 함수 vs 익명 함수
const namedFunc = function named() {
  return "이름 있는 함수";
};
const anonymousFunc = function() {
  return "익명 함수";
};
console.log(namedFunc());
console.log(anonymousFunc());

