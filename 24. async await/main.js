
/*
function greet() {
  return Promise.resolve("안녕하세요!");
}
greet().then(msg => console.log("✅ greet:", msg));

function delay() {
  return new Promise(resolve => setTimeout(() => resolve("2초 후 완료!"), 2000));
}

function runDelay() {
  console.log("시작");
  delay().then(result => {
    console.log(result);
    console.log("끝");
  });
}
runDelay();
*/

// ✅ 1. 기본 async 함수
async function greet() {
  return "안녕하세요!";
}
greet().then(msg => console.log("✅ greet:", msg));

// ✅ 2. await 사용한 Promise 대기
function delay() {
  return new Promise(resolve => setTimeout(() => resolve("2초 후 완료!"), 2000));
}
async function runDelay() {
  console.log("시작");
  const result = await delay(); // 여기서 기다림
  console.log(result);
  console.log("끝");
}
runDelay();

// ✅ 3. try/catch로 에러 처리
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("⛔ 서버 오류!"), 1000);
  });
}
async function load() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("🚨 에러 발생:", error);
  }
}
load();

// ✅ 4. await 순차 처리
async function processSequential() {
  const a = await Promise.resolve(1);
  const b = await Promise.resolve(2);
  const c = await Promise.resolve(3);
  console.log("✅ 순차 합:", a + b + c); // 6
}
processSequential();

// ✅ 5. await 병렬 처리
async function processParallel() {
  const p1 = Promise.resolve(1);
  const p2 = Promise.resolve(2);
  const p3 = Promise.resolve(3);
  const results = await Promise.all([p1, p2, p3]);
  console.log("✅ 병렬 결과:", results); // [1, 2, 3]
}
processParallel();

// ✅ 6. API 호출 예제 (JSONPlaceholder 사용)
async function fetchUser(userId) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await res.json();
  return user;
}
async function showUserName(id) {
  try {
    const user = await fetchUser(id);
    console.log("👤 사용자 이름:", user.name);
  } catch (err) {
    console.error("❌ 사용자 정보를 가져오는 데 실패:", err);
  }
}
showUserName(1);

// ✅ 7. 실습: setTimeout으로 3초 후 메시지 출력
function wait3Seconds() {
  return new Promise(resolve => setTimeout(() => resolve("⏳ 3초 후 메시지!"), 3000));
}
async function showDelayedMessage() {
  const msg = await wait3Seconds();
  console.log(msg);
}
showDelayedMessage();

// ✅ 8. 실습: 두 API 결과 병합 출력
async function combineUserAndPost() {
  try {
    const user = await fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json());
    const post = await fetch("https://jsonplaceholder.typicode.com/posts/1").then(res => res.json());
    console.log("👤 사용자 이름:", user.name);
    console.log("📝 게시글 제목:", post.title);
  } catch (err) {
    console.error("❌ 병합 실패:", err);
  }
}
combineUserAndPost();

// ✅ 9. 실습: Promise.all로 API 3개 병렬 호출
async function fetchMultipleUsers() {
  try {
    const responses = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1"),
      fetch("https://jsonplaceholder.typicode.com/users/2"),
      fetch("https://jsonplaceholder.typicode.com/users/3")
    ]);
    const users = await Promise.all(responses.map(res => res.json()));
    users.forEach((u, i) => console.log(`👤 유저${i + 1} 이름:`, u.name));
  } catch (err) {
    console.error("❌ 병렬 유저 요청 실패:", err);
  }
}
fetchMultipleUsers();
