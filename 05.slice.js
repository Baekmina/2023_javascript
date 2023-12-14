const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// slice = 기본 배열을 기반으로 새 배열 생성 (시작 번호, 끝 번호)
// const storedResults = testResults.slice(0, 2); // [1, 5.3, 1.5]
// const storedResults = testResults.slice(-3, -1); // [10.99, -5]
const storedResults = testResults.slice(2); // [1.5, 10.99, -5, 10]

testResults.push(5.91);

console.log(storedResults, testResults);
