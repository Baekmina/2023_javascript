const defaultResult = 0;
let currentResult = defaultResult;

let logEntries = [];

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
  currentResult += enterrNumber;
  createAndWriteOutput("+", initialResult, enterrNumber);

  // object (데이터를 함께 묵어 그룹화하는데에 사용)
  const logEntry = {
    operation: "ADD",
    prevResult: initialResult,
    number: enterrNumber,
    result: currentResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
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
