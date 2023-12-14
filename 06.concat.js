// 배열 끝에 요소를 추가해서 연결 (한 배열이나 여러 배열을 취함)
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.concat([3.99, 2]);

testResults.push(5.91);

console.log(storedResults, testResults);
