// // // ✅ 1. Promise란?
// const p1 = new Promise((resolve, reject) => {
//   console.log("+Executor");

//   // setTimeout의 콜백은 태스크 큐에 큐잉
//   // : 태스크 큐는 마이크로태스크 큐보다 우선순위가 낮음
//   //   우선순위가 낮다는 것은 이벤트 루프에게 
//   //   각 큐에서 콜백을 디큐하는 순서와 관련!!!
//   setTimeout(() => {
//     console.log("Before Calling resolve");
//     resolve("✅ 1초 후 성공!");
//     console.log("After Calling resolve");

//   }, 1000);

//   console.log("-Executor");

// });

// console.log("Before Calling p1.then");

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

// 정말 then의 콜백은 then 호출시,
// 마이크로태스크 큐에 큐잉이되는가?
// 아니면 JS가 해당 Promise 객체의 익스큐터가 
// resolve를 호출해야지만, 마이크로태스크 큐에 큐잉되는지?
// : resove(fullfilled)가 호출되어야만 해당 콜백을 마이크로태스크 큐에
//   큐잉!!!
// p1.then(result => console.log("1:", result));

// console.log("After calling p1.then ");
// resolve(...):성공했을 때 전달할 결과값을 지정함
// result:resolve(...)로 전달된 그 결과값을 받는 변수

// // ✅ 2. 콜백 지옥 vs Promise 체이닝
// function getUser(id) {

//     //  executor 함수의 파라미터는 사용자가 자유롭게 결정할 수 있음
//     return new Promise(resolve => {
//         setTimeout(() => resolve({ id, name: "Alice" }), 500);
//     });
//     // 자바스크립트 함수는 파라미터를 생략해도 오류가 발생하지 않습니다. 
//     // 예:
//     // function test(a, b) {
//     //    console.log(a); // b를 안 써도 에러 없음
//     // }
//     // test(1); // 1

// }
// function getPosts(userId) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve([{ id: 1, title: "Post1" }]), 500);
//     });
// }
// function getComments(postId) {
//     return new Promise(resolve => {
//         setTimeout(() => resolve(["Comment1", "Comment2"]), 500);
//     });
// }

// getUser(1)
//   .then(user => getPosts(user.id))
//   .then(posts => getComments(posts[0].id))
//   .then(comments => console.log("2: 댓글 목록:", comments));

// ✅ 3. resolve / reject 예제
// function asyncAdd(x, y) {
//   return new Promise((resolve, reject) => {
//     if (typeof x !== 'number' || typeof y !== 'number') {
//       reject("❌ 숫자만 입력하세요");
//     } else {
//       setTimeout(() => resolve(x + y), 1000);
//     }
//   });
// }
// asyncAdd(3, 4)
//   .then(result => console.log("3: 합계:", result))
//   .catch(error => console.error("3:", error)); // 3: ❌ 숫자만 입력하세요

// // ✅ 4. Promise.all
// Promise.all([
//   asyncAdd(1, 2),
//   asyncAdd(5, 6),
//   asyncAdd(7, 8)
// ]).then(results => {
//   console.log("4: Promise.all 결과:", results);
// }).catch(err => console.error("4:", err));

// // ✅ 5. Promise.race
// const slow = new Promise(resolve => setTimeout(() => resolve("🐢 느림"), 2000));
// const fast = new Promise(resolve => setTimeout(() => resolve("🐇 빠름"), 1000));

// Promise.race([slow, fast])
//   .then(result => console.log("5: race 결과:", result));

// // ✅ 6. async / await
// async function asyncFlow() {
//   try {
//     const result = await asyncAdd(10, 20);
//     console.log("6: async/await 결과:", result);
//   } catch (err) {
//     console.error("6:", err);
//   }
// }
// asyncFlow();

// // ✅ 7. 실습: 로그인 → 사용자 정보 → 알림 목록
// function login() {
//   return Promise.resolve({ userId: 1 });
// }
// function fetchUserInfo(userId) {
//   return Promise.resolve({ name: "Alice", id: userId });
// }
// function fetchNotifications(userId) {
//   return Promise.resolve(["알림1", "알림2"]);
// }
// login()
//   .then(user => fetchUserInfo(user.userId))
//   .then(userInfo => fetchNotifications(userInfo.id))
//   .then(notifications => console.log("7: 알림 목록:", notifications));

// // ✅ 8. 실습: 이미지 3장 로드 시뮬레이션
// function loadImage(url) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(`${url} ✅ 로드 완료`), Math.random() * 1500);
//   });
// }
// Promise.all([
//   loadImage("image1.png"),
//   loadImage("image2.png"),
//   loadImage("image3.png")
// ]).then(results => console.log("8: 이미지 로드 결과:", results));

// 가상 API 함수 (실제 환경의 fetch를 흉내냄) : Web API Fetch : http 통신을 수행할 수 있는...
function fakeApiCall(url, data) {
  console.log("+fakeApiCall");
  // executor는 resolve 만 제공할 수도 있음.
  // Promise의 Executor[(resolve, reject) => setTimeout(() => resolve({ id: "TX_999" }), 2000))]는
  // Promise 생성자 함수 내부에서 즉시 실행(콜스택)됨.
  const promise = new Promise((resolve, reject) => {
    console.log("Executor of Promise in fakeApiCall");

    setTimeout(() => {
      console.log("timer of Executor of Promise in fakeApiCall");
        resolve({ id: "TX_999" });
      }, // 2초후에 resolve를 호출하고 
      2000)
    }
  );

  console.log("-fakeApiCall");

  return promise;
  /*return new Promise((resolve, reject) => {

    let number = setTimeout(
      () => resolve({ id: "TX_999" }), 
      2000);

    resolve(number);
    
  });*/
}

// paymentData = { amount: 50000, item: "고급 키보드" };
function processPayment(paymentData, timeoutMs = 5000) {
  console.log("+processPayment");
  // Promise 생성자 함수는 내부적으로 Executor를 바로 실행(콜스택에서)됨.
  // resolve와 reject라는 두 개의 파라미터는 자바스크립트 엔진이 Promise 생성자 함수를 통해 
  // 내부적으로 만들어서 우리가 작성한 executor 함수에게 전달/주입(Injection)해 주는 도구
  const promise = new Promise((resolve, reject) => {

    console.log("+Executor of Promise in processPayment");
    // 1. 타임아웃 타이머 설정 (익스큐터가 시작되자마자 CallStack에서 WebAPI에게 setTimeout 함수 호출을 위임)
    const timer = setTimeout(() => {  // 2. WebAPI에게 setTimeout를 전달함. 이후 WebAPI에 의해서 Timeout이 수행됨.
      console.log("Time out in processPayment");
         
      reject(new Error("결제 시간 초과: 네트워크 상태를 확인하세요."));
    }, timeoutMs);

    // 3. 가상의 서버 통신 (가상의 /v1/payments uri를 요청함)
    //console.log(`[결제 시작] ${paymentData.amount}원 결제 중...`);

    fakeApiCall("/v1/payments", paymentData)
      .then((response) => {  // response = { id: "TX_999" }
        // 성공 시: 타이머를 해제하고 resolve 호출
        console.log("callback of then of Promise of fakeApiCall");

        clearTimeout(timer); 
        resolve({ success: true, transactionId: response.id }); // then에게 전달할 object
      })
      .catch((error) => {
        // 실패 시: 타이머를 해제하고 reject 호출
        clearTimeout(timer);
        reject(new Error(`결제 실패: ${error.message}`)); // catch에게 전달할 object
      });

    console.log("-Executor of Promise in processPayment");

  });

  console.log("-processPayment");

  return promise;
}

// --- 아래는 위 함수를 실제로 사용하는 모습 ---
processPayment({ amount: 50000, item: "고급 키보드" })
  // then의 아규먼트는 마이크로태스크 큐에 큐잉됨.
  // 콜스택이 텅빈상태가 되면 이 마이크로태스크에 큐잉된 아규먼트는 콜스택에서 실행됨.
  .then(
    (res) => { 
      console.log("callback of then of Promise of processPayment");

      console.log("결제 완료 영수증:", res); 
    }
  )
  .catch((err) => console.error("⚠️ 최종 에러 처리:", err.message));

console.log("After calling processPayment");




