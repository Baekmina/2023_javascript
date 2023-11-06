const defaultResult = 0;
let currentResult = defaultResult;

// 코드가 많거나 공유하려는 로직이 여러 줄일 때 사용하면 좋은 방법
function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforCalc, calcNumber) {
  const calcDescription = `${resultBeforCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enterrNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enterrNumber;
  createAndWriteOutput("+", initialResult, enterrNumber);
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
