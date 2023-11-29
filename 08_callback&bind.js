// not related to game

//resultHandler를 매개변수로 받음
const combine = (resultHandler, operation, ...numbers) => {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num);
    } else {
      sum -= validateNumber(num);
    }
  }
  resultHandler(sum);
};

// const subtractUp = function (resultHandler, ...numbers) {
//   let sum = 0;

//   for (const num of numbers) {
//     sum -= num;
//   }
//   resultHandler(sum);
// };

// call back 함수
// const showResult = (result, messageText) => {
// bind에 의해 매개변수의 끝에 붙게 옮겨짐.
const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};

// bind = 새로운 함수를 생성해줌
combine(
  showResult.bind(this, "The result after adding all numbers is: "),
  "ADD",
  1,
  5,
  "fdf",
  10,
  -3,
  6,
  10
);
combine(
  showResult.bind(this, "The result after adding all numbers is: "),
  "ADD",
  1,
  5,
  10,
  -3,
  6,
  10,
  25,
  88
);
combine(
  showResult.bind(this, "The result after subtracting all numbers is: "),
  "SUBSTRACT",
  1,
  10,
  15,
  20
);

// sumUp(showResult, 1, 5, "fdf", 10, -3, 6, 10);
// sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);
// subtractUp(showResult, 1, 10, 15, 20);
