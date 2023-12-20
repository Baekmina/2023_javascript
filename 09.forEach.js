const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const taxAdjustedPrices = [];

// for (const price of prices) {
//   // 전체 항목 통과 시 새 항목을 taxAdjustedPrices에 push
//   taxAdjustedPrices.push(price * (1 + tax));
// }\

// forEach = indexOf처럼 index값을 구하거나 for 반복문 대신 사용
prices.forEach((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});

console.log(taxAdjustedPrices);
