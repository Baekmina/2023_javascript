const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

// reduce() = 배열의 값을 축소할 때 (단일 값으로 결합할 때) 사용

// let sum = 0;
// prices.forEach((price) => {
//   sum += price;
// });
// console.log(sum);

const sum = prices.reduce((prevValue, curValue, curIndex, prices) => {
  // prevValue = 초기값 / curValue = 첫번째 값
  return prevValue + curValue;
  // 첫번째 실행 결과 = 0 + 10.99
  // 두번째 실행 결과 = 10.99 + 5.99
  // 세번째 실행 결과 = 16.98 + 3.99
  // 네번째 실행 결과 = 20.97 + 6.59
  // 결과 = 27.56
}, 0);

console.log(sum);
