// 스코프란?
let a = 10;

function test() {
  let b = 20;
  console.log("a:", a); // 접근 가능
  console.log("b:", b); // 접근 가능
}

test();

console.log("b 바깥:", typeof b); // ReferenceError 아님 → undefined

// 스코프의 종류 실습
// 전역 스코프
var globalVar = "나는 전역";

// 함수 스코프
function scopeTest() {
  var funcVar = "함수 내부";

  if (true) {
    // 블록 스코프
    let blockLet = "블록 let";
    const blockConst = "블록 const";
    var blockVar = "var는 블록 무시";
    console.log(blockLet);    // 
    console.log(blockConst);  // 
  }

  // console.log(blockLet);    //  ReferenceError
  // console.log(blockConst);  //  ReferenceError
  console.log(blockVar);      // var는 함수 범위
}

scopeTest();

// 시각화 예제 – 스코프 체계
let x = 1;

function outer() {
  let y = 2;

  function inner() {
    let z = 3;
    console.log("inner:", x, y, z); //  1, 2, 3
  }

  inner();

  // console.log(z); // ReferenceError
}

outer();

// var vs let/const 차이
{
  var a1 = "var 변수";
  let b1 = "let 변수";
  const c1 = "const 변수";
}

console.log(a1); // var는 블록 무시
// console.log(b1); // ReferenceError
// console.log(c1); // ReferenceError

// 함수 스코프 예제
function example() {
  var msg = "Hello";
  let count = 3;
}

try {
  console.log(msg);   // ReferenceError
} catch (e) {
  console.error("msg:", e.message);
}

try {
  console.log(count); // ReferenceError
} catch (e) {
  console.error("count:", e.message);
}

// 렉시컬 스코프(Lexical Scope)
// 자바의 쉐도잉과 약간 비슷함
let value = "global";

function outer() {
  let value = "outer";

  function inner() {
    console.log("내부 value:", value); // outer
  }

  return inner;
}

const fn = outer();
fn(); // outer → 정의 위치 기준









