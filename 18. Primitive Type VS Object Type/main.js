console.log("✅ 1. 원시 타입(Primitive Type)의 복사 및 비교");

let a = 10;
let b = a;  // 값 복사
b = 20;

console.log("a:", a); // 10 (원본 변경 X)
console.log("b:", b); // 20

let x = 5;
let y = 5;
console.log("x === y:", x === y); // true (값이 같음)

console.log("\n✅ 2. 객체 타입(Object Type)의 복사 및 비교");

let obj1 = { name: "Alice" };
let obj2 = obj1;  // 참조 복사
obj2.name = "Bob";

console.log("obj1.name:", obj1.name); // "Bob" (같은 객체를 참조 중)
console.log("obj1 === obj2:", obj1 === obj2); // true (같은 참조)

let obj3 = { id: 1 };
let obj4 = { id: 1 };
console.log("obj3 === obj4:", obj3 === obj4); // false (값은 같지만 참조는 다름)

console.log("\n✅ 3. 배열은 객체 타입이다");

let arr = [1, 2, 3];
let copy = arr;
copy[0] = 999;

console.log("arr[0]:", arr[0]); // 999 (참조 복사)
console.log("arr === copy:", arr === copy); // true

console.log("\n✅ 4. 객체를 const로 선언해도 내부 속성은 변경 가능");

const person = { name: "Alice" };
person.name = "Bob";
console.log("person.name:", person.name); // "Bob"

console.log("\n✅ 5. typeof 연산자");

console.log("typeof 123:", typeof 123);               // number
console.log("typeof 'hello':", typeof "hello");       // string
console.log("typeof true:", typeof true);             // boolean
console.log("typeof undefined:", typeof undefined);   // undefined
console.log("typeof null:", typeof null);             // object ← 특이 케이스!
console.log("typeof {}:", typeof {});                 // object
console.log("typeof []:", typeof []);                 // object (배열도 객체임)
console.log("typeof function(){}:", typeof function(){}); // function

console.log("\n✅ 6. 깊은 복사 vs 얕은 복사");

// 얕은 복사: 참조만 복사됨
let shallowUser = { name: "Tom" };
let shallowCopy = shallowUser;
shallowCopy.name = "Jerry";

console.log("shallowUser.name:", shallowUser.name); // "Jerry"

// 깊은 복사: 완전히 다른 객체
let deepUser = { name: "Sam", age: 20 };
let deepCopy = JSON.parse(JSON.stringify(deepUser));
deepCopy.name = "Max";

console.log("deepUser.name:", deepUser.name); // "Sam"
console.log("deepCopy.name:", deepCopy.name); // "Max"

console.log("\n🧠 정리");

// 불변값 (원시 타입)
const n = 1;
console.log("원시 값 n:", n);

// 가변값 (객체 타입)
const obj = {};
obj.value = 123;
console.log("객체 값 obj.value:", obj.value);
