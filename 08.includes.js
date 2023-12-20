// 배열 끝에 요소를 추가해서 연결 (한 배열이나 여러 배열을 취함)
const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(storedResults, testResults);
console.log(testResults.indexOf(1.5)); // 인수로 보내는 값의 인덱스를 반환 (첫번째 요소를 찾으면 종료)
// console.log(testResults.lastIndexOf(1.5)); // 오른쪽부터 시작

// inculudes = 배열의 일부인지 확인하고자 할 때 사용 (true, false)
console.log(testResults.includes(10.99));
console.log(testResults.indexOf(10.99) !== -1);
