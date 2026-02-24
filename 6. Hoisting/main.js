


// const colors = ["red", "green", "blue"];
// // 자바의 enhanced for loop
// for (let color of colors) {
//   console.log(color);
// }

// const user = { 
//   name: "Alice", 
//   age: 30,
//   phone: "010-xxxx-xxxx",
//   gender: "male"
// };


// // 자바스크립트 객체는 key : value 스타일!!
// for (let key in user) {
//   console.log(key + ":", user[key]);
// }

// List<String> lists = new ArrayList<>();
// lists.add("1");
// lists.add("2");

// // enhanced for loop : List 인터페이스가 iterable 인터페이스를 상속하였기 때문에
// // iterabe : 리스트의 엘리먼트를 순회함
// for ( String str : lists) {

// }

const person = { 
  name: {  // name 키의 값은 javascript object!
    firstname: "sumi",
    lastname: "kim"
  },

  age: 40, 
  job: "Dev" 
};

// 자바스크립트 객체는 key : value 스타일!!
for (let key in person) {
  const value = person[key];

  if (typeof value == "object" && value != null) {
    for (const innerKey in value) {
      console.log(innerKey, ":", value[innerKey]);
    }
  } else {
    console.log(key, ":", value);
  }
}
console.log("🚀 ~ person:", person)

















// // var a = 10;
// // console.log(a); // 👉 undefined
// // var a = 10;


// // greet(); // 👉 "Hello"

// // function greet() {
// //   console.log("Hello");
// // }

// // console.log(b); // ❌ ReferenceError
// // let b = 20;