
// ✅ 1. Promise란?
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("✅ 1초 후 성공!");
  }, 1000);
});
// Promise 컨스트럭터의 파라미터는 executor
// function executor(resolve, reject) {
//      내부 로직
// }
// 그러므로 다음 화살표 함수는 executor 함수임.
// (resolve, reject) => {
//   setTimeout(() => {
//     resolve("✅ 1초 후 성공!");
//   }, 1000);
// }
p1.then(result => console.log("1:", result));
// resolve(...):성공했을 때 전달할 결과값을 지정함
// result:resolve(...)로 전달된 그 결과값을 받는 변수

// ✅ 2. 콜백 지옥 vs Promise 체이닝
function getUser(id) {

    //  executor 함수의 파라미터는 사용자가 자유롭게 결정할 수 있음
    return new Promise(resolve => {
        setTimeout(() => resolve({ id, name: "Alice" }), 500);
    });
    // 자바스크립트 함수는 파라미터를 생략해도 오류가 발생하지 않습니다. 
    // 예:
    // function test(a, b) {
    //    console.log(a); // b를 안 써도 에러 없음
    // }
    // test(1); // 1

}
function getPosts(userId) {
    return new Promise(resolve => {
        setTimeout(() => resolve([{ id: 1, title: "Post1" }]), 500);
    });
}
function getComments(postId) {
    return new Promise(resolve => {
        setTimeout(() => resolve(["Comment1", "Comment2"]), 500);
    });
}

getUser(1)
  .then(user => getPosts(user.id))
  .then(posts => getComments(posts[0].id))
  .then(comments => console.log("2: 댓글 목록:", comments));

// ✅ 3. resolve / reject 예제
function asyncAdd(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== 'number' || typeof y !== 'number') {
      reject("❌ 숫자만 입력하세요");
    } else {
      setTimeout(() => resolve(x + y), 1000);
    }
  });
}
asyncAdd(3, 4)
  .then(result => console.log("3: 합계:", result))
  .catch(error => console.error("3:", error)); // 3: ❌ 숫자만 입력하세요

// ✅ 4. Promise.all
Promise.all([
  asyncAdd(1, 2),
  asyncAdd(5, 6),
  asyncAdd(7, 8)
]).then(results => {
  console.log("4: Promise.all 결과:", results);
}).catch(err => console.error("4:", err));

// ✅ 5. Promise.race
const slow = new Promise(resolve => setTimeout(() => resolve("🐢 느림"), 2000));
const fast = new Promise(resolve => setTimeout(() => resolve("🐇 빠름"), 1000));

Promise.race([slow, fast])
  .then(result => console.log("5: race 결과:", result));

// ✅ 6. async / await
async function asyncFlow() {
  try {
    const result = await asyncAdd(10, 20);
    console.log("6: async/await 결과:", result);
  } catch (err) {
    console.error("6:", err);
  }
}
asyncFlow();

// ✅ 7. 실습: 로그인 → 사용자 정보 → 알림 목록
function login() {
  return Promise.resolve({ userId: 1 });
}
function fetchUserInfo(userId) {
  return Promise.resolve({ name: "Alice", id: userId });
}
function fetchNotifications(userId) {
  return Promise.resolve(["알림1", "알림2"]);
}
login()
  .then(user => fetchUserInfo(user.userId))
  .then(userInfo => fetchNotifications(userInfo.id))
  .then(notifications => console.log("7: 알림 목록:", notifications));

// ✅ 8. 실습: 이미지 3장 로드 시뮬레이션
function loadImage(url) {
  return new Promise(resolve => {
    setTimeout(() => resolve(`${url} ✅ 로드 완료`), Math.random() * 1500);
  });
}
Promise.all([
  loadImage("image1.png"),
  loadImage("image2.png"),
  loadImage("image3.png")
]).then(results => console.log("8: 이미지 로드 결과:", results));
