

console.log(x); // ❌ ReferenceError (TDZ)
let x = 10;








// function showVarScope() {
//   var x = 0;



// }

// var compare = true;
// if (compare) {
//   var x = 1;  // var로 선언된 변수는 블록 스코프를 무시함.
// }

// // System.out.println
// console.log(x);

// var x = 1;
// var x = 2;

// console.log(x);



// 전역 스코프(Global Scope)
// var g1 = "나는 var 전역";
// let g2 = "나는 let 전역";
// const g3 = "나는 const 전역";

// function showGlobal() {
//   console.log(g1); // 접근 가능
//   console.log(g2); // 접근 가능
//   console.log(g3); // 접근 가능
// }

// showGlobal();
// console.log(g1, g2, g3); // 모두 접근 가능

// // 함수 스코프
// function testFunctionScope() {
//   var a = 1;
//   let b = 2;
//   const c = 3;

//   console.log(a, b, c); // 정상 출력
// }

// testFunctionScope();

// console.log(a); // ❌ ReferenceError
// console.log(b); // ❌ ReferenceError
// console.log(c); // ❌ ReferenceError

// // 블록 스코프
// // if (true) {
// //   var x = 100;   // 블록 스코프 무시 → 전역 스코프에 할당됨
// //   let y = 200;   // 블록 스코프
// //   const z = 300; // 블록 스코프

// //   console.log(x, y, z); // 100 200 300
// // }

// // console.log(x); // 👉 100  (var는 블록을 무시)
// // console.log(y); // ❌ ReferenceError (블록 밖)
// // console.log(z); // ❌ ReferenceError (블록 밖)



// // 세 스코프의 차이를 한 번에 보여주는 예제
// var g = "전역 변수";

// function outer() {
//   var a = "함수 스코프 - var";
//   let b = "함수 스코프 - let";

//   if (true) {
//     var c = "블록을 무시하는 var";
//     let d = "블록 스코프의 let";
//     const e = "블록 스코프의 const";

//     console.log("블록 내부:", g, a, b, c, d, e);
//   }

//   console.log("함수 내부:", g, a, b, c); // d, e 없음
// }

// outer();

// console.log("전역에서:", g);  
// console.log(a); // ❌ ReferenceError
// console.log(b); // ❌ ReferenceError
// console.log(c); // ❌ ReferenceError (함수 안 var이므로 함수 밖은 불가능)

