console.log("🧩 1. 배열 순회 방법");

const fruits = ['apple', 'banana', 'cherry'];

// 🔸 1.1 for 루프
console.log("▶ for:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i}: ${fruits[i]}`);
}

// 🔸 1.2 for...of
console.log("▶ for...of:");
for (const fruit of fruits) {
  console.log(fruit);
}

// 🔸 1.3 forEach()
console.log("▶ forEach:");
fruits.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});

// 🔸 1.4 map()
console.log("▶ map:");
const upper = fruits.map(fruit => fruit.toUpperCase());
console.log(upper); // ['APPLE', 'BANANA', 'CHERRY']

// 🔸 1.5 for...in (비추천 방식)
console.log("▶ for...in (비추천):");
for (let key in fruits) {
  console.log(`${key}: ${fruits[key]}`);
}

// 🧪 배열 실습 예제
console.log("🧪 배열 실습 예제:");
const scores = [90, 75, 88];

console.log("▶ forEach:");
scores.forEach((s, i) => console.log(`${i}: ${s}`));

console.log("▶ map:");
const doubled = scores.map(s => s * 2);
console.log("doubled:", doubled);

console.log("▶ for...of:");
for (let score of scores) {
  console.log(score);
}

console.log("\n🧩 2. 객체 순회 방법");

const user = {
  name: "Alice",
  age: 30,
  job: "Developer"
};

// 🔸 2.1 for...in
console.log("▶ for...in:");
for (let key in user) {
  console.log(`${key}: ${user[key]}`);
}

// 🔸 2.2 Object.keys() + forEach()
console.log("▶ Object.keys + forEach:");
Object.keys(user).forEach(key => {
  console.log(`${key}: ${user[key]}`);
});

// 🔸 2.3 Object.entries() + for...of
console.log("▶ Object.entries + for...of:");
for (let [key, value] of Object.entries(user)) {
  console.log(`${key} = ${value}`);
}

// 🔸 2.4 Object.values()
console.log("▶ Object.values:");
console.log(Object.values(user)); // ["Alice", 30, "Developer"]

// 🧪 객체 실습 예제
console.log("🧪 객체 실습 예제:");
const book = {
  title: "JavaScript Deep Dive",
  pages: 450,
  author: "이웅모"
};

console.log("▶ for...in:");
for (let key in book) {
  console.log(`${key}: ${book[key]}`);
}

console.log("▶ Object.entries:");
Object.entries(book).forEach(([k, v]) => {
  console.log(`${k} = ${v}`);
});

console.log("\n⚠️ 잘못된 for...in 사용 (배열에 비추천):");
const arr = ['a', 'b', 'c'];
for (let i in arr) {
  console.log(`${i}: ${arr[i]}`); // 작동은 되지만 의도와 다를 수 있음
}

console.log("✅ 개선된 for...of:");
for (const item of arr) {
  console.log(item); // 더 안전하고 직관적
}

console.log("\n✅ 요약: 반복 방식 비교");

console.table([
  { 방식: "for", 배열: "✅", 객체: "❌", 설명: "전통적인 배열 인덱스 기반 반복" },
  { 방식: "forEach()", 배열: "✅", 객체: "❌", 설명: "배열 전용, 콜백 사용" },
  { 방식: "for...of", 배열: "✅", 객체: "❌", 설명: "iterable 순회 (배열, 문자열 등)" },
  { 방식: "for...in", 배열: "⚠️", 객체: "✅", 설명: "객체 속성 순회 (배열엔 비추)" },
  { 방식: "Object.keys()", 배열: "✅", 객체: "✅", 설명: "key 배열 반환 후 순회" },
  { 방식: "Object.values()", 배열: "✅", 객체: "✅", 설명: "value 배열 반환" },
  { 방식: "Object.entries()", 배열: "✅", 객체: "✅", 설명: "[key, value] 쌍으로 순회" },
]);
