const defaultResult = 0;
let currentResult = defaultResult;

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
  currentResult += enterrNumber; // currentResult = currentResult + enterrNumber;
  // ++currentResult
  createAndWriteOutput("+", initialResult, enterrNumber);
}

function subtract() {
  const enterrNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enterrNumber;
  createAndWriteOutput("-", initialResult, enterrNumber);
}

function multiply() {
  const enterrNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enterrNumber;
  createAndWriteOutput("*", initialResult, enterrNumber);
}

function divide() {
  const enterrNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enterrNumber;
  createAndWriteOutput("/", initialResult, enterrNumber);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
