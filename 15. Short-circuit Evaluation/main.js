
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

function showDashboard() {
    console.log("Hello");
}

let isLoggedIn = true;


isLoggedIn && showDashboard();

let isAdmin = false;
isAdmin || alert("권한이 없습니다");

function greet(user) {
  const name = user && user.name || "Anonymous";
  console.log("Hello, " + name);
}

greet();

