// 실습 코드
const greet = function(name) {
  console.log("Hello, " + name);
};

greet("Alice"); // Hello, Alice
greet("Bob");   // Hello, Bob

//함수 선언식 vs 함수 표현식
sayHi(); // 정상 작동

function sayHi() {
  console.log("Hi (declaration)");
}

try {
  hello(); // TypeError: greet is not a function
} catch (e) {
  console.error(e.message);
}

const hello = function() {
  console.log("Hi (expression)");
};

hello(); // 정상 작동


// 익명 함수 표현식
const sayThanks = function(name) {
  console.log("Thank you, " + name);
};

sayThanks("지훈"); // Thank you, 지훈




// 이름 있는 함수 표현식
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // 내부에서 자기 이름으로 재귀 호출
};

console.log(factorial(5)); // 120

// 외부에서 fact()는 사용할 수 없음:
try {
  console.log(fact(5)); //  ReferenceError
} catch (e) {
  console.error(e.message);
}

// 함수 표현식 흐름도 실습
try {
  sum(1, 2); // 에러 발생
} catch (e) {
  console.error("호출 실패:", e.message);
}

const sum = function(a, b) {
  return a + b;
};

console.log("호출 성공:", sum(1, 2)); // 3

// 호이스팅 실습
try {
  console.log(add(2, 3)); // TypeError
} catch (e) {
  console.error("에러:", e.message);
}

const add = function(a, b) {
  return a + b;
};




