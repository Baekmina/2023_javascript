// 동일하거나 다른 유형의 데이터를 가진 배열
const hobbies = ["Cooking", "Sports"];
const personalData = [30, "Max", { moreDetail: [] }];

// 중첩 배열 & 다차원 배열
const analyticsData = [
  [1, 1.6],
  [-5.4, 2.1],
];

for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}

console.log(personalData[1]);
