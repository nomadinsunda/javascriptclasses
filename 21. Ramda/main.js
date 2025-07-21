// 반드시 먼저 Ramda를 불러와야 합니다. 브라우저라면 아래 스크립트를 index.html에 추가:
// <script src="https://cdn.jsdelivr.net/npm/ramda@latest/dist/ramda.min.js"></script>

// Ramda 전역 객체는 R

console.log("✔️ R.map()");
const double = x => x * 2;
// Lodash는 _.map(배열, 함수) 방식이고 
// Ramda는 R.map(함수)(배열) 방식입니다. ← 이게 포인트
// Ramda의 함수 호출 방식이 "커리(curry) 기반"이라는 점. 
// 다시 말해:
//          R.map(fn)(array)
// 는 아래와 같은 형태의 커링 함수 사용을 의미합니다:
// 일반적인 JS 방식:
//  array.map(fn);
// Ramda 방식 (커리 적용):
//  R.map(fn)(array);
// Ramda의 R.map은 커리 함수로 정의되어 있어서, 
// 아래 두 방식 모두 가능합니다:
//  R.map(fn)(array); // 함수 먼저 → 데이터 나중 (Point-Free 스타일에 적합)
//  R.map(fn, array); // 함수와 데이터를 함께 전달
console.log(R.map(double)([1, 2, 3])); // [2, 4, 6]

console.log("\n✔️ R.filter()");
const isEven = x => x % 2 === 0;
console.log(R.filter(isEven)([1, 2, 3, 4])); // [2, 4]

console.log("\n✔️ R.prop()");
const user = { name: 'Alice', age: 30 };
console.log("name:", R.prop('name')(user)); // 'Alice'

console.log("\n✔️ R.pluck()");
const users1 = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 28 }
];
console.log("names:", R.pluck('name')(users1)); // ['Alice', 'Bob']

console.log("\n🔁 R.pipe() — 여러 함수 조합");
const numbers = [1, 2, 3, 4];
const process = R.pipe(
  R.map(x => x + 1),
  R.filter(x => x % 2 === 0)
);
console.log("pipe result:", process(numbers)); // [2, 4]

console.log("\n🛠️ 실전 예제 — 성인 이름만 추출");

const users2 = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 17 },
  { name: "Tom", age: 19 }
];

const getAdultNames = R.pipe(
  R.filter(user => user.age >= 18),
  R.map(user => user.name)
);

console.log("성인 이름:", getAdultNames(users2)); // ["Alice", "Tom"]

console.log("\n🎯 커링 예제: 자동 커링 지원");

const add = R.add;
const add5 = add(5);  // add 함수는 커링됨
console.log("add5(10):", add5(10)); // 15

console.log("\n🔍 Lodash vs Ramda 스타일 비교");

const sample = [1, 2, 3];

function lodashStyle(arr) {
  // Lodash 스타일은 일반적으로 _.map(arr, fn)
  return arr.map(x => x * 2); // 원래는 _.map(arr, fn)
}

function ramdaStyle(arr) {
  return R.map(x => x * 2)(arr); // Ramda는 R.map(fn)(arr)
}

console.log("Lodash 스타일:", lodashStyle(sample)); // [2, 4, 6]
console.log("Ramda 스타일:", ramdaStyle(sample));   // [2, 4, 6]

console.log("\n📌 정리: pipe로 데이터 흐름 만들기");

const getEvenSquares = R.pipe(
  R.filter(n => n % 2 === 0),
  R.map(n => n * n)
);

console.log("짝수 제곱:", getEvenSquares([1, 2, 3, 4])); // [4, 16]
