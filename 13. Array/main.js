// ✅ 예제 1: 배열 선언과 요소 접근
const fruits = ["사과", "바나나", "오렌지"];

// TODO: 각 요소를 console.log로 출력해보세요.
console.log(fruits[0]); // 사과
console.log(fruits[1]); // 바나나
console.log(fruits[2]); // 오렌지


// ✅ 예제 2: 다양한 생성 방법
const a = [1, 2, 3];
const b = new Array(3);       // [empty × 3]
const c = Array.of(10);       // [10]
const d = Array.from("Hi!");  // ['H', 'i', '!']

console.log("arrays:");
console.log(a, b, c, d);


// ✅ 예제 3: 배열의 동적 크기와 다양한 타입 저장
const mixed = [42, "hello", true, { name: "Alice" }, [1, 2, 3]];
console.log(mixed);


// 🔄 예제 4: 삽입/삭제 메서드 실습
const colors = ["빨강", "파랑", "노랑"];
colors.push("초록");    // 뒤에 추가
console.log(colors); // ["빨강", "파랑", "노랑", "초록"]

colors.unshift("보라"); // 앞에 추가
console.log(colors); // ["보라", "빨강", "파랑", "노랑", "초록"]

colors.pop();           // 뒤에서 제거
console.log(colors); // ["보라", "빨강", "파랑", "노랑"]

colors.shift();         // 앞에서 제거
console.log(colors); // ["빨강", "파랑", "노랑"]


// 🔍 예제 5: 탐색 메서드
const animals = ["강아지", "고양이", "코끼리"];
console.log(animals.includes("고양이")); // true
console.log(animals.indexOf("코끼리"));  // 2


// 🧪 예제 6: join, slice, concat, flat
const words = ["Hello", "World"];
console.log(words.join(" ")); // "Hello World"

const arr1 = [1, 2, 3];
const arr2 = [4, 5];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4, 5]

const nested = [1, [2, [3, [4]]]];
console.log(nested.flat(2)); // [1, 2, 3, [4]]


// 🧠 예제 7: 고차 함수 - forEach
const scores = [90, 80, 100];
// i는 forEach() 콜백 함수의 두 번째 파라미터로 자동 제공되는 인덱스 값
scores.forEach((score, i) => {
  console.log(`${i + 1}번째 점수: ${score}`);
});


// 🧠 예제 8: 고차 함수 - map
const prices = [100, 200, 300];
const vatIncluded = prices.map(price => price * 1.1);
console.log(vatIncluded); // [110, 220, 330]


// 🧠 예제 9: 고차 함수 - filter
const nums1 = [1, 2, 3, 4, 5, 6];
const even = nums1.filter(n => n % 2 === 0);
console.log(even); // [2, 4, 6]


// 🧠 예제 10: 고차 함수 - reduce
const nums2 = [10, 20, 30];
const total = nums2.reduce((acc, val) => acc + val, 0);
console.log("합계:", total); // 60


// 🐛 예제 11: 배열 디버깅
const arr = [1, 2, 3];
console.log(arr[5]); // undefined

console.log(typeof arr); // object
console.log(Array.isArray(arr)); // true


