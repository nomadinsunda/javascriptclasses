let leftValue = false;
let rightValue = true;
if (leftValue && rightValue) {
  console.log("🚀 ~ short cir...");
}

// A || B -> A가 Truthy면 A 반환, 
// //     -> A가 Falsy면 B 반환
console.log("Hello" || "World"); // "Hello"
console.log("" || "World");      // "World"
console.log(null || 0 || "JS");  // "JS"

// A && B -> A가 Truthy 면, B 반환
//        -> A가 Falsy면, A 반환
console.log("Hello" && "World"); // "World"
console.log(null && "World");    // null
console.log("JS" && 0 && "CSS"); // 0

let inputName = null;
const name = inputName || "Guest";
console.log(name);

// 다음 함수는 리턴값이 없음: 자바스크립트에는 void 타입이 없음...
function showDashboard() {
    console.log("Hello");
}

let isLoggedIn = true;

// showDashboard()의 리턴값은 없음 : returnValue는 undefined
let returnValue = showDashboard();

// A && B -> A가 Truthy 면, B 반환
let result = isLoggedIn && returnValue/*showDashboard()*/;

console.log("🚀 ~ isLoggedIn && showDashboard() => ", result);

let isAdmin = false;
isAdmin || alert("권한이 없습니다");

function greet(user) {
  const name = user && user.name || "Anonymous";
  console.log("Hello, " + name);
}

greet();

