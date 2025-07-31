// ✅ 1. 객체 리터럴 생성 및 속성 접근
const user = {
  name: "Alice",
  age: 25,
  isAdmin: true,
  greet: function () {
    console.log("Hello, " + this.name);
  }
};

console.log(user.name);     // Alice
console.log(user["age"]);   // 25
user.greet();               // Hello, Alice
user.address = "Seoul";
console.log(user.address);

const Bike = new Object();
Bike.gear = 5;
Bike.price = 40000;
console.log(Bike.gear);
console.log(Bike.price);



// ✅ 2. 객체 생성자 사용
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.introduce = function() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age}`);
  }
}

const person1 = new Person("Bob", 30);
person1.introduce();        // Hi, I'm Bob and I'm 30


// ✅ 3. 클래스 사용
class Car {

  age = 30;

  #id = 123;

  static species = "Vehicle";
  
  constructor(brand) {
    this.brand = brand;
    this.speed = 0;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.brand} speed: ${this.speed}`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.brand} speed: ${this.speed}`);
  }

  #secret() {
    console.log("This is private");
  }

   displayName() {
    return this.brand.toUpperCase();
  }

  // set displayName(value) {
  //   this.brand = value;
  // }

  // 🔹 Static Method
  static create(brand) {
    return new Car(brand);
  }
}

const yourCar = Car.create("Hyundai");
console.log(yourCar.accelerate());
console.log("###################");
// yourCar.displayName("Good");
// let name = yourCar.displayName();
// console.log(name);

const myCar = new Car("Hyundai");
myCar.accelerate();         // Hyundai speed: 10
myCar.brake();              // Hyundai speed: 5
myCar.displayName();

// ✅ 4. 동적 속성 추가하고 액세스
const key = "email";
user[key] = "alice@example.com";
console.log(user.email);    // alice@example.com

user.helloworld = "hello world!!!";
console.log(user.helloworld);


// ✅ 5. 속성 삭제
delete user.isAdmin;
console.log(user.isAdmin);  // undefined


// ✅ 6. Object 내장 메서드 활용
console.log(Object.keys(user));     // ['name', 'age', 'greet', 'email']
console.log(Object.values(user));   // ['Alice', 25, ƒ, 'alice@example.com']
console.log(Object.entries(user));  // [['name', 'Alice'], ['age', 25], ...]


// ✅ 7. 객체 복사 (얕은 복사)
const copiedUser = Object.assign({}, user);
copiedUser.name = "Eve";
console.log(user.name);      // Alice (원본 영향 없음)


// ✅ 8. JSON 직렬화 / 역직렬화
const json = JSON.stringify(user);
console.log(json);           // {"name":"Alice",...}

const parsed = JSON.parse(json);
console.log(parsed.name);    // Alice
