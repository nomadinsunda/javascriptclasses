function dfunc() {
  console.log("dfunc");
}

function cfunc() {
  console.log("cfunc");
  dfunc();
}

function bfunc() {
  console.log("bfunc");
  cfunc();
}

function afunc() {
  console.log("afunc");
  bfunc();
}

afunc();

console.log("call stack???");


// // ✅ 1. 동기(Synchronous) 코드 예제
// console.log("🟩 [동기]");

// console.log("1. 커피 주문");
// console.log("2. 커피 제조 시작");
// console.log("3. 커피 완료, 고객에게 전달");


// // ✅ 2. 비동기(Asynchronous) 예제 (setTimeout)
// console.log("\n🟨 [비동기 - setTimeout]");

// console.log("1. 커피 주문");

// setTimeout(() => {
//   console.log("2. 커피 제조 시작 (2초 소요)");
// }, 2000);

// console.log("3. 계산서 출력");


// // ✅ 3. 콜백 기반 비동기 처리
// console.log("\n🟦 [비동기 - 콜백 방식]");

// function fetchDataWithCallback(callback) {
//   setTimeout(() => {
//     callback("👋 서버 응답 도착!");
//   }, 2000);
// }

// console.log("요청 시작 (callback)");
// fetchDataWithCallback((msg) => console.log("응답:", msg));
// console.log("다음 작업 진행 (callback)");


// // ✅ 4. 요약 출력
// console.log("\n📌 요약:");
// console.table([
//   { 구분: "동기", 흐름: "순차 실행", 예시: "DOM 조작, 계산", 장점: "예측 가능", 단점: "작업 지연" },
//   { 구분: "비동기", 흐름: "이벤트 대기, 콜백 호출", 예시: "AJAX, setTimeout", 장점: "UI 멈춤 방지", 단점: "콜백 지옥" }
// ]);

