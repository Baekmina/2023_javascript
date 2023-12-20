const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

// sort = 배열을 정렬
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
console.log(sortedPrices);
// console.log(sortedPrices.reverse()); // reverse = 반전된 배열 출력하기

// filter = 배열 필터링하기
const filteredArray = prices.filter((price, idx, prices) => {
  return price > 6; // true, false로 반환하기 때문에 false는 모두 삭제됨.
});

// 화살표 함수로 짧게 표현하기
// const filteredArray = prices.filter(price => price > 6)

console.log(filteredArray);
