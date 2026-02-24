// 스코프란?
// let a = 10;

// function test() {
//   let b = 20;
//   console.log("a:", a); // 접근 가능
//   console.log("b:", b); // 접근 가능
// }

// test();

// console.log("b 바깥:", typeof b); // ReferenceError 아님 → undefined

// 스코프의 종류 실습
// 전역 스코프
// let globalVar = "나는 전역";

// // 함수 스코프
// function scopeTest() {
//   let funcVar = "함수 내부";

//   if (true) {
//     // 블록 스코프
//     let blockLet = "블록 let";
//     const blockConst = "블록 const";
//     console.log(blockLet);    // 
//     console.log(blockConst);  // 
//   }  

//   // console.log(blockLet);    //  ReferenceError
//   // console.log(blockConst);  //  ReferenceError
// }

// scopeTest();

// 시각화 예제 – 렉시칼 스코프
// function outer(value, callback) {
//   let temp = value;
//   let cb = callback;

//   return function inner(para) {      
//       temp = temp + cb(para);  // temp와 cb는 상위 스코프의 변수!!!(렉시칼 스코프?)!!!
//       console.log("🚀 ~ add:", temp);
//       return temp;
//   }

// }

// function caba(para) {
//   return 10 + para;
// }

// const innerFn = outer(3, caba);
// let ret = innerFn(5); // inner가 호출되는 곳은 전역 스코프...그럼 inner에 상위 스코프는 전역?인 줄 알았지만, outer가 상위스코프임 : 렉시칼 스코프
// console.log("🚀 ~ ret:", ret);














