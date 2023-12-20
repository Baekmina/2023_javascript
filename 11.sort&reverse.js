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
