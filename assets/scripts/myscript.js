const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  // 반복된 코드를 함수 선언을 통해 줄일 것.
  // const enterrNumber = parseInt(userInput.value);

  const enterrNumber = getUserNumberInput();
  const calcDescription = `${currentResult} + ${enterrNumber}`;
  currentResult = currentResult + enterrNumber;
  outputResult(currentResult, calcDescription);

  // parseInt = 소숫점 자리가 없는 숫자 (정수) & +userInput.value
  // parseFloat = 소숫점 자리가 있는 숫자
  // toString = 숫자를 문자열로 변환 (잘 사용안함)
}

addBtn.addEventListener("click", add);
