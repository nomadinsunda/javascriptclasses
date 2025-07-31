// 콜백 함수란?

function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // 나중에 실행
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// Hello, Alice
// Goodbye!

// 콜백 함수 사용 목적
// 콜백 함수의 장점: 재사용, 로직 분리, 유연한 확장성
function downloadFile(filename, onSuccess) {
  console.log(filename + " 다운로드 시작...");
  setTimeout(() => {
    console.log(filename + " 다운로드 완료!");
    onSuccess(filename);
  }, 2000);
}

// 

downloadFile("report.pdf", 
  (name) => console.log(name + "을 열어봅니다.")
);

// 흐름 시각화 실습
// "콜백 함수가 전달되고, 나중에 호출되는 흐름"을 체험
function execute(callback) {
  console.log("A: 콜백 전달됨");
  callback();
  console.log("C: 콜백 실행 이후");
}

execute(function() {
  console.log("B: 콜백 함수 실행됨");
});

// 기본 예제
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function afterGreet() {
  console.log("반가워요!");
}

greet("Alice", afterGreet);

// 익명 함수로 콜백 전달하기
greet("Bob", function () {
  console.log("처음 뵙겠습니다!");
});

// 비동기 콜백 실습
console.log("타이머 시작");

setTimeout(function() {
  console.log("3초 후 실행!");
}, 3000);

console.log("타이머 등록 완료");

// 고차 함수와 콜백
// 정의: 고차 함수란?
//      고차 함수는 함수를 값처럼 다루는 함수입니다.
//      자바스크립트에서 함수는 일급 객체이기 때문에, 
//      함수 자체를 아규먼트로 넘기거나 
//      리턴값으로 사용할 수 있습니다.
function repeat(n, callback) {
  for (let i = 0; i < n; i++) {
    callback(i);
  }
}

// 익명 함수 전달
repeat(3, 
  (i) => console.log(i + "번째 반복"));

// 화살표 함수 전달
repeat(2, i => console.log("Arrow:", i));

// 콜백 기반 리팩토링
// Before: 내부 로직이 고정됨
function startTask() {
  console.log("1단계 준비");
  console.log("2단계 작업");
  console.log("3단계 종료");
}

// After: 핵심 로직을 콜백으로 분리
function runStep(step) {
  console.log("1단계 준비");
  step();
  console.log("3단계 종료");
}

runStep(function() {
  console.log("2단계 작업");
});

// 콜백 헬 체험 예제
setTimeout(() => {
  console.log("1단계");
  setTimeout(() => {
    console.log("2단계");
    setTimeout(() => {
      console.log("3단계");
    }, 1000);
  }, 1000);
}, 1000);

// 중첩이 깊어지고, 유지보수가 어려워짐 → 해결: Promise / async-await










