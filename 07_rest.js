// not related to game

// Rest 매개 변수 (... => 기존의 것을 가져옴)
// 항상 마지막 인자여야함 (...numbers, a => error)
const sumUp = (a, b, ...numbers) => {
  let sum = 0;
  for (const num of numbers) {
    sum += num;
  }
  return sum;
};

const subtractUp = function (...numbers) {
  let sum = 0;
  for (const num of numbers) {
    sum -= num;
  }
  return sum;
};

console.log(sumUp(1, 5, 10, -3, 6, 10));
console.log(sumUp(1, 5, 10, -3, 6, 10, 25, 88));
console.log(subtractUp(1, 10, 15, 20));
