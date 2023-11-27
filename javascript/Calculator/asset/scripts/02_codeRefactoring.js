const defaultResult = 0;
let currentResult = defaultResult;

// 코드가 많거나 공유하려는 로직이 여러 줄일 때 사용하면 좋은 방법
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforCalc, calcNumber) {
  const calcDescription = `${resultBeforCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  // 반복된 코드를 함수 선언을 통해 줄일 것.
  // const enterrNumber = parseInt(userInput.value);

  const enterrNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enterrNumber;
  createAndWriteOutput("+", initialResult, enterrNumber);

  // parseInt = 소숫점 자리가 없는 숫자 (정수) & +userInput.value
  // parseFloat = 소숫점 자리가 있는 숫자
  // toString = 숫자를 문자열로 변환 (잘 사용안함)
}

function subtract() {
  const enterrNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enterrNumber;
  createAndWriteOutput("-", initialResult, enterrNumber);
}

function multiply() {
  const enterrNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enterrNumber;
  createAndWriteOutput("*", initialResult, enterrNumber);
}

function divide() {
  const enterrNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enterrNumber;
  createAndWriteOutput("/", initialResult, enterrNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
