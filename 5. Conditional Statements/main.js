// let age = 25;

// if ( 20 <= age && age < 30) { // age가 20살이상 30세 미만이면 true
//   console.log("age가 20살이상 30세 미만");

// } else if(30 <= age && age < 40) { // age가 30살이상 40세 미만이면 true
//   console.log("age가 30살이상 40세 미만");

// } else {
//   console.log("몰라요");

// }

// 엄격한 비교(===) string을 엄격하게 비교...
let fruit = ""; // empty 문자열은 falsey

switch (fruit) {
  case true:
    console.log("true 입니다.");
    break;
  case false:
    console.log("false 입니다.");  // ---> 혹 empty 문자열은 falsy니까 이 case 스테이트먼트가 실행되지 않을까 했지만,
    break;                         //      switch는 === 처럼 엄격한 비교를 수행함. 그래서 이 스테이트먼트가 실행되지 않고 default:가...
  default:
    console.log("모르는 과일입니다.");
}



let age = 50;
let message = (age <= 18) ? "미성년자" : (age >= 40)? "중장년": "성인";

console.log(message); // "성인"