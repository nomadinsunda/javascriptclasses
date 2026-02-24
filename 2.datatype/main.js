// let x = 10;         // Number
// console.log("1st x=" + x);
// x = "hello";        // String
// console.log("2nd x=" + x);
// x = true;           // Boolean
// console.log("3rd x=" + x);

// console.log(typeof 42);           // "number"
// console.log(typeof "hello");     // "string"
// console.log(typeof true);        // "boolean"
// console.log(typeof undefined);   // "undefined"
// console.log(typeof null);        // ❗️"object" (오래된 버그)
// console.log(typeof {});          // "object"
// console.log(typeof []);          // "object"
// console.log(typeof function(){});// "function"

// let hello = "swseo";
// console.log("datatype of hello variable:" + typeof hello);


// let d = NaN;
// d = d + 1;
// console.log(d);


// let msg = "Hello";
// console.log("🚀 ~ msg:", msg);

// let aliace = 'Alice';
// console.log("🚀 ~ aliace:", aliace);

// let greet = `Hi, ${aliace}!`; // 템플릿 문자열
// console.log("🚀 ~ greet:", greet);



// let big = 1234567890123456789012345678901234567890n;
// console.log("🚀 ~ big:", typeof big)

// let id = Symbol("id");
// let another = Symbol("id");

// console.log(id === another); // false

// const user = {
//   name: "Tom",
//   age: 30,
//   hobbies: ["축구", "게임", "영화감상"],
//   // 1. 가입 날짜 (Date 객체 사용)
//   createdAt: new Date(), 
//   // 2. 생일 (특정 날짜 지정)
//   birthday: new Date("1994-05-20"),
  
//   greet: function() {
//     console.log("환영합니다");
//   }
// };

// // 확인 방법
// console.log(user.name);
// console.log(user.age);
// console.log(user.hobbies);
// console.log(user.hobbies[0]);
// console.log(user.createdAt); // 현재 날짜와 시간 출력
// console.log(user.birthday.getFullYear()); // 1994 (연도만 추출 가능)
// user.greet();

// // 수정 방법
// user.name = "swseo";
// console.log(user.name);
// user.age = 51;
// console.log(user.age);
// user.hobbies[0] = "농구";
// console.log(user.hobbies[0]);


// const list = [1, 2, 3, 4];
// console.log(typeof list); // "object"
// console.log(Array.isArray(list)); // true

// console.log(list[2]);


// let var1 = String(123);       // 정수 리터럴:123 -> 문자열 "123"
// console.log("🚀 ~ var1:", var1)
// console.log("🚀 ~ var1:", typeof var1);
// console.log("🚀 ~ Number:", Number("3.14")); // 문자열 "3.14" -> 실수 3.14
// Boolean(0);        // false

// let var1 = "5" + 1       // "51" (문자열)
// console.log("var1=" + var1 + "," + "type=" + typeof var1);

let var2 = "5" - 1       // 4    (숫자)
console.log("var2=" + var2 + "," + "type=" + typeof var2);

let var3 = true + 1      // 2
console.log("var3=" + var3 + "," + "type=" + typeof var3);

false == 0    // true (느슨한 비교)
false === 0   // false (엄격한 비교)


// if (1) {

// } else if (0) {

// }

