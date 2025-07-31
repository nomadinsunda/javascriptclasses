console.log("🧩 Spread 연산자 (펼치기)");

// 📘 1. 배열에서 Spread
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("배열 spread:", arr2); // [1, 2, 3, 4, 5]

// 📘 2. 객체에서 Spread
const user1 = { name: "Alice", age: 25 };
const clonedUser = { ...user1, role: "admin" };
console.log("객체 spread:", clonedUser); // { name: "Alice", age: 25, role: "admin" }

// 📘 3. 함수 호출 시 Spread
const nums = [10, 20, 30];
console.log("최댓값:", Math.max(...nums)); // 30

// 📘 4. 배열 병합
const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b];
console.log("병합된 배열:", c); // [1, 2, 3, 4]

console.log("\n🧩 Rest 파라미터 (수집 파라미터)");

// 📘 1. 함수 파라미터에서 Rest
function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
console.log("sum(1,2,3,4):", sum(1, 2, 3, 4)); // 10

// 📘 2. 구조 분해 할당에서 Rest (배열)
const [head, ...tail] = [100, 200, 300, 400];
console.log("head:", head);     // 100
console.log("tail:", tail);     // [200, 300, 400]

// 📘 2. 구조 분해 할당에서 Rest (객체)
const person = { name: "Tom", age: 30, city: "Seoul" };
const { name, ...info } = person;
console.log("name:", name);     // Tom
console.log("info:", info);     // { age: 30, city: "Seoul" }

console.log("\n🧪 실습 예제");

// ✅ 예제 1: 함수에서 여러 숫자 더하기
function sumAll(...args) {
  return args.reduce((acc, cur) => acc + cur, 0);
}
console.log("sumAll(1~5):", sumAll(1, 2, 3, 4, 5)); // 15

// ✅ 예제 2: 기존 객체 복사 및 수정
const originalUser = { id: 1, name: "Alice" };
const updatedUser = { ...originalUser, name: "Bob" };
console.log("updatedUser:", updatedUser); // { id: 1, name: "Bob" }

// ✅ 예제 3: 배열에서 첫 번째와 나머지 나누기
const fruits = ["apple", "banana", "orange"];
const [firstFruit, ...restFruits] = fruits;
console.log("첫 과일:", firstFruit);      // "apple"
console.log("나머지 과일:", restFruits);  // ["banana", "orange"]

console.log("\n🛠️ 실전 팁 적용 예");

// 배열/객체 복사 (Spread)
const original = [1, 2, 3];
const copy = [...original];
console.log("배열 복사:", copy);

// 함수의 가변 아규먼트 처리 (Rest)
function logAll(...items) {
  for (const item of items) {
    console.log("받은 값:", item);
  }
}
logAll("🍎", "🍌", "🍊");

// 구조 분해 시 나머지 수집 (Rest)
const settings = {
  theme: "dark",
  fontSize: 14,
  language: "ko"
};
const { theme, ...otherSettings } = settings;
console.log("theme:", theme);
console.log("기타 설정:", otherSettings); // { fontSize: 14, language: "ko" }

console.log("\n💡 자주 하는 실수 예");

// ❌ 잘못된 Rest 사용 - 함수 선언이 아님
try {
  const broken = (...args) => {
    return args;
  };
  console.log("올바른 함수 선언으로 동작:", broken(1, 2, 3));
} catch (e) {
  console.error("함수 선언 에러:", e.message);
}

// Spread는 얕은 복사임 (중첩 객체 주의)
const nested = { user: { name: "Sam" } };
const shallow = { ...nested };
shallow.user.name = "Changed";
console.log("원본 영향 있음:", nested.user.name); // Changed ❗

