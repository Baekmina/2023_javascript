// 배열에 데이터를 추가 & 제거하는 방법
const hobbies = ["Sports", "Cooking"];

hobbies.push("Reading");
hobbies.unshift("Coding"); // 배열의 첫번째 요소에 추가 (배열의 모든 요소를 오른쪽 끝으로 이동시킴)

// hobbies.pop(); // 배열의 마지막에 있는 모든 항목 삭제
const poppedValue = hobbies.pop();
hobbies.shift(); // 첫 부분의 항목을 삭제 (배열의 모든 요소를 왼쪽으로 한자리 이동시킴 => 따라서 호출 시 첫번째 요소가 삭제됨)

console.log(hobbies);

// 배열의 다른 위치에 항목을 추가 & 조작하는 방법
hobbies[1] = "Coding"; // ["Sports", "Coding"]
// hobbies[5] = "Reading"; // 이 방법은 사용하지 않음. (존재하지 않는 인덱스에 값을 넣으면 안되나 값은 할당할 수 있음.)
console.log(hobbies, hobbies[4]);
