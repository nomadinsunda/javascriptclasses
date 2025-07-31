// ✅ 1. 배열 구조 분해 실습
console.log("✅ 배열 구조 분해");

// 기본 사용법
const arr = [10, 20, 30];
const [a1, b1, c1] = arr;
console.log("기본:", a1, b1, c1); // 10 20 30

// 일부만 추출
const [first, , third] = [100, 200, 300];
console.log("일부 추출:", first, third); // 100 300

// 나머지 요소 받기
const [head, ...rest] = [1, 2, 3, 4];
console.log("head:", head);        // 1
console.log("rest:", rest);        // [2, 3, 4]

// swap
let x = 1, y = 2;
[x, y] = [y, x];
console.log("swap:", x, y); // 2 1


// ✅ 2. 객체 구조 분해 실습
console.log("\n✅ 객체 구조 분해");

const user = { 
    id: 101, 
    nickname: "intheeast" 
};

// 기본 사용법
const { id, nickname } = user;
console.log("기본:", id, nickname); // 101 "intheeast"

// 별칭
const { id: userId } = user;
console.log("별칭:", userId); // 101

// 디폴트값 설정
const { age = 30} = { name: "Eve" };
console.log("디폴트값:", age); // 30
// console.log("name : " + name); // name: "Eve"는?

// ✅ 3. 함수 파라미터 구조 분해
console.log("\n✅ 함수 파라미터 구조 분해");

// 객체 파라미터
// {name, age} = guest
function printUser({ name, age }) {
  console.log(`User: ${name} (${age})`);
}
const guest = { name: "David", age: 28 };
printUsuer(guest);
// printUser({ name: "David", age: 28 }); // David (28)

// 디폴트값 포함
function greet({ name = "Guest" }) {
  console.log("Hello " + name);
}
greet({ name: "Sara" }); // Hello Sara
greet({});               // Hello Guest

// 배열 파라미터
function sum([a, b]) {
  return a + b;
}
console.log("sum:", sum([5, 10])); // 15


// ✅ 4. 중첩 구조 분해
console.log("\n✅ 중첩 구조 분해");

const user2 = {
  id: 1,
  profile: {
    name: "Jane",
    contact: { 
      email: "jane@example.com" 
    }
  }
};

// const { name, age } = user;
const { profile: { contact: { email }  } } = user2;

// user2.profile.contact.email에서 구조 분해로 추출된 변수
console.log("중첩 email:", email); // "jane@example.com"
// 전체 객체 구조
// user2
// ├── id: 1
// └── profile
//     ├── name: "Jane"
//     └── contact
//         └── email: "jane@example.com"
//
// 구조 분해 할당 순서 설명
// 우리가 아래 코드를 실행하면:
// const {
//   profile: {
//     contact: { email }
//   }
// } = user2;
// 이건 사실 다음을 차례대로 쪼개는 작업입니다:
// 1️⃣ const profile = user2.profile
// → 즉 profile 변수에는 아래 값이 들어갑니다:
// {
//   name: "Jane",
//   contact: { email: "jane@example.com" }
// }
// 2️⃣ const contact = profile.contact
//  → 즉 contact 변수에는 아래 값이 들어갑니다:
// { email: "jane@example.com" }
// 3️⃣ const email = contact.email
// → 최종적으로 이 부분에서 email이라는 이름의 변수에 "jane@example.com"이 담깁니다.
//
// ✅ 최종 정리
////////////////////////////////////////////
// 아래 한 줄은
// const { profile: { contact: { email }  } } = user2;

// 
// 이렇게 세 줄로 풀어 쓸 수 있음
// const profile = user2.profile;
//const contact = profile.contact;
// const email = contact.email;
////////////////////////////////////////////



// ✅ 5. for...of + 구조 분해
console.log("\n✅ for...of + 구조 분해");

const people = [
  { name: "Lee", age: 30 },
  { name: "Kim", age: 25 }
];

for (const { name, age } of people) {
  console.log(`${name}: ${age}`);
}


// ✅ 6. default + alias + nested 조합
console.log("\n✅ default + alias + nested");

const config = {
  port: 8080,
  server: { host: "localhost" }
};

const {
  port: p = 3000,
  server: { host: h = "127.0.0.1" }
} = config;

console.log("포트:", p); // 8080
console.log("호스트:", h); // "localhost"


// ⚠️ 에러 상황 테스트 (디버깅 팁)
console.log("\n⚠️ 에러 테스트");

try {
  const obj = null;
  const { x } = obj; // TypeError 발생
} catch (err) {
  console.error("에러 발생:", err.message); // Cannot destructure property ...
}


// ✅ 구조 분해 패턴 요약 (주석 포함)
// 배열 구조 분해
const [m, n] = [1, 2];

// 객체 구조 분해
const obj = { x2: 10, y2: 20 };
const { x2, y2 } = obj;

// 함수 파라미터 구조 분해
function f({ a, b }) {
  return a + b;
}
const objEx = {
  a: 1,
  b: 1
}
f(objEx);

// 나머지 요소
const [head2, ...tail] = [1, 2, 3, 4];

// 별칭 (alias)
const { x: aliasX } = obj;

// 디폴트값
const { z = 100 } = obj;
