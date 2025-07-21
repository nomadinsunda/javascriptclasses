// 1: 기본 Truthy / Falsy 판별
const values = [false, 0, -0, 0n, "", null, undefined, NaN, "hello", 42, [], {}, function () {}];

values.forEach((val, i) => {
  let display;
  if (typeof val === "bigint") {
    display = val.toString() + "n";
  } else if (typeof val === "function") {
    display = "function() {}";
  } else {
    display = JSON.stringify(val);
  }

  const result = val ? "Truthy" : "Falsy";
  console.log(`values[${i}] (${display}): ${result}`);
});



// 2: 조건문 내 Falsy 사용 예제
console.log("<2: 조건문 내 Falsy 사용 예제>");
function printMessage(msg) {
  if (!msg) {
    console.log("❌ 메시지가 비어 있습니다.");
  } else {
    console.log("✅ 메시지: ", msg);
  }
}

printMessage("");        // Falsy
printMessage("Hi there"); // Truthy


// 3: OR 연산자를 통한 기본값 할당
console.log("<3: OR 연산자를 통한 기본값 할당>");
let input1 = "";
let input2 = undefined;
let input3 = "사용자 입력값";

let default1 = input1 || "기본값 A";
let default2 = input2 || "기본값 B";
let default3 = input3 || "기본값 C";

console.log(default1); // 기본값 A
console.log(default2); // 기본값 B
console.log(default3); // 사용자 입력값

// 4: Falsy 여부를 판별하는 함수 만들기
console.log("<4: Falsy 여부를 판별하는 함수 만들기>");
function isFalsy(value) {
  return !Boolean(value);
}

console.log(isFalsy(0));         // true
console.log(isFalsy(""));        // true
console.log(isFalsy("false"));   // false
console.log(isFalsy([]));        // false


// 5: == vs === 비교 실습
console.log("<5: == vs === 비교 실습>");
console.log(null == undefined);  // true (느슨한 비교)
console.log(null === undefined); // false (엄격한 비교)
console.log("0" == 0);           // true
console.log("0" === 0);          // false


// 6: Truthy/Falsy 디버깅
console.log("<6: Truthy/Falsy 디버깅>");
function debugValue(value) {
  console.log("원래 값:", value);
  console.log("typeof:", typeof value);
  console.log("Boolean(value):", Boolean(value));
  console.log("!!value:", !!value);
  console.log("=== null:", value === null);
  console.log("=== undefined:", value === undefined);
}

debugValue([]); // Truthy
debugValue(""); // Falsy
debugValue("false"); // Truthy
debugValue(NaN); // Falsy
