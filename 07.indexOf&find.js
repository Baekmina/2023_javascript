// 배열 끝에 요소를 추가해서 연결 (한 배열이나 여러 배열을 취함)
const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5)); // 인수로 보내는 값의 인덱스를 반환 (첫번째 요소를 찾으면 종료)
console.log(testResults.lastIndexOf(1.5)); // 오른쪽부터 시작

const personData = [{ name: "Max" }, { name: "Manuel" }];
console.log(personData.indexOf({ name: "Manuel" })); // -1 반환 (아무것도 찾지 못했을 시 -1 반환함)
// 즉, indexOf = 참조(객체 등)값에서 동작하지 않음.

// 객체(참조)에서 index값 구하기
// find = 배열에서 일치하는 항목을 반환
const manuel = personData.find((person, idx, persons) => {
  return person.name === "Manuel";
});

manuel.name = "Anna";

console.log(manuel, personData);

// findIndex = 해당 항목의 인덱스를 반환
const maxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === "Max";
});

console.log(maxIndex);
