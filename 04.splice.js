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

// 두 요소 사이에 요소를 추가 (index, 삭제하려는 항목의 수)
// hobbies.splice(0, 0, "Good Food"); // ["Good Food", "Sports", "Coding"]
hobbies.splice(1, 0, "Good Food"); // ["Sports", "Good Food", "Coding"]
console.log(hobbies);

// 요소를 삭제
// hobbies.splice(0, 1); // 첫번째 요소 삭제 => ["Good Food", "Coding"]
// hobbies.splice(0); // [] => 항목 개수가 없는 splice(0)는 인덱스의 모든 항목을 삭제함
// const removedElements = hobbies.splice(0, 1); // 삭제한 요소를 반환
// const removedElements = hobbies.splice(-1, 1); // -1 => 마지막 요소를 제거 ["Sports", "Good Food"]
const removedElements = hobbies.splice(-2, 1); // -2 => 마지막에서 두번째 요소를 제거 ["Sports", "Coding"]
console.log(hobbies);
