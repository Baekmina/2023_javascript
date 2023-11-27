// var = 전역함수
// 함수 안, 밖에서도 선언될 수 있음.
var name = "Max";

// let & const = 블록함수
// let = 함수 안 에서 생성된 변수는 함수 밖에서 선언될 수 없음.

if (name === "Max") {
  let hobbies = ["Sports, Cooking"];
  console.log(hobbies);
}

function greet() {
  var age = 30;
  var name = "Manuel";
  console.log(name, age, hobbies);
}

console.log(name, hobbies); // hobbies is not defined = 밖에서 선언X

greet();
