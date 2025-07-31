console.log("🧱 1. push() / pop()");
let arr1 = [1, 2];
arr1.push(3);
console.log("push:", arr1); // [1, 2, 3]
arr1.pop();
console.log("pop:", arr1); // [1, 2]

console.log("\n🧱 2. unshift() / shift()");
let arr2 = [1, 2];
arr2.unshift(0);
console.log("unshift:", arr2); // [0, 1, 2]
arr2.shift();
console.log("shift:", arr2); // [1, 2]

console.log("\n🔁 3. forEach()");
const fruits = ["apple", "banana"];
fruits.forEach((fruit, idx) => {
  console.log(`${idx}: ${fruit}`);
});
// 반환 없음, break 불가

console.log("\n🧪 4. map()");
const nums1 = [1, 2, 3];
const doubled = nums1.map(n => n * 2);
console.log("doubled:", doubled); // [2, 4, 6]

console.log("\n🧹 5. filter()");
const nums2 = [1, 2, 3, 4];
const even = nums2.filter(n => n % 2 === 0);
console.log("even:", even); // [2, 4]

console.log("\n🧮 6. reduce()");
const nums3 = [1, 2, 3];
const sum = nums3.reduce((acc, cur) => acc + cur, 0);
console.log("sum:", sum); // 6

console.log("\n🔍 7. find() / findIndex()");
const users1 = [{ id: 1 }, { id: 2 }];
console.log("find:", users1.find(u => u.id === 2));       // {id: 2}
console.log("findIndex:", users1.findIndex(u => u.id === 2)); // 1

console.log("\n📌 8. includes()");
console.log([1, 2, 3].includes(2)); // true
console.log([NaN].includes(NaN));  // true

console.log("\n🔄 9. indexOf() / lastIndexOf()");
const nums4 = [1, 2, 3, 2];
console.log("indexOf:", nums4.indexOf(2));      // 1
console.log("lastIndexOf:", nums4.lastIndexOf(2)); // 3

console.log("\n🧩 10. some() / every()");
console.log("some > 2:", [1, 2, 3].some(n => n > 2));  // true
console.log("every > 0:", [1, 2, 3].every(n => n > 0)); // true

console.log("\n✂️ 11. slice()");
const arr3 = [1, 2, 3, 4];
console.log("slice(1,3):", arr3.slice(1, 3)); // [2, 3]
console.log("slice():", arr3.slice());       // 복사 [1, 2, 3, 4]

//🛠️ splice() 메서드란?
//Array.prototype.splice(start, deleteCount, ...items)
// :배열의 특정 위치에서 요소를 제거하고, 
//  새 요소를 삽입할 수 있는 메서드입니다.
//  이 메서드는 원본 배열을 직접 변경(mutate)합니다.
console.log("\n🛠️ 12. splice()");
const arr4 = [1, 2, 3];
const removed = arr4.splice(1, 1, 9);
console.log("after splice:", arr4);  // [1, 9, 3]
console.log("removed:", removed);    // [2]

console.log("\n🔀 13. sort() / reverse()");
const arr5 = [3, 1, 2];
console.log("sort():", arr5.sort()); // 문자열 기준 → [1, 2, 3]
console.log("sort 숫자:", [5, 2, 9].sort((a, b) => a - b)); // [2, 5, 9]
console.log("reverse():", [1, 2, 3].reverse()); // [3, 2, 1]

console.log("\n🧵 14. join()");
console.log(["a", "b", "c"].join("-")); // 'a-b-c'

console.log("\n🔁 15. concat()");
console.log([1, 2].concat([3, 4])); // [1, 2, 3, 4]

console.log("\n🧪 종합 활용 예제");
const users = [
  { id: 1, name: "Alice", age: 28 },
  { id: 2, name: "Bob", age: 35 },
  { id: 3, name: "Charlie", age: 30 }
];

const result = users
  .filter(u => u.age >= 30)
  .map(u => u.name.toUpperCase());

console.log("30세 이상 이름 (대문자):", result); // ['BOB', 'CHARLIE']

console.log("\n⚠️ 주의사항 요약");

// 메서드별 원본 변경 여부 및 리턴값
const methods = [
  { method: "push", mutable: "✅", return: "length", use: "끝에 추가" },
  { method: "pop", mutable: "✅", return: "제거 요소", use: "끝에서 제거" },
  { method: "unshift", mutable: "✅", return: "length", use: "앞에 추가" },
  { method: "shift", mutable: "✅", return: "제거 요소", use: "앞에서 제거" },
  { method: "map", mutable: "❌", return: "새 배열", use: "변환" },
  { method: "filter", mutable: "❌", return: "새 배열", use: "조건 추출" },
  { method: "slice", mutable: "❌", return: "새 배열", use: "일부 복사" },
  { method: "splice", mutable: "✅", return: "제거 배열", use: "삽입/삭제" },
  { method: "sort", mutable: "✅", return: "정렬된 배열", use: "정렬" },
  { method: "reverse", mutable: "✅", return: "뒤집힌 배열", use: "역순 정렬" },
];

console.table(methods);

const students = [
  { name: "Alice", score: 88 },
  { name: "Bob", score: 62 },
  { name: "Charlie", score: 95 },  // a
  { name: "David", score: 74 },   // b   ---> 0 > ret : a가 ...
  { name: "John", score: 74 }
];

const result2 = students
  .filter(student => student.score >= 70) // 70점 이상만
  .sort((a, b) => b.score - a.score)     // 점수순 내림차순 : 큰 값 순으로 내림 정렬?...
  .map(student => student.name);         // 이름만 추출 : 새로운 배열

  // sort 결과값 : 0보다 크면, b가 선택
  //             0보다 작으면, a가 선택
  //             0이면 a를 선택

console.log(result2); // ['Charlie', 'Alice', 'David', 'John']


const scores = ["90", "85", "70", "88"];

const average = scores
  .map(Number)  // Number -> NumberConstructor : Number("90") -> 90 Integer, Number("85") -> 85, Number("70") -> 70.. [90, 85, 70, 88];
  .filter(n => n >= 80)  // [90, 85, 88];
  // callback(accumulator, currentValue, currentIndex, array)
  .reduce((acc, cur, _, arr) => acc + cur / arr.length, 0); // 0이 acc의 초기값

console.log(average); // 평균 점수: (90 + 85 + 88) / 3 = 87.67
