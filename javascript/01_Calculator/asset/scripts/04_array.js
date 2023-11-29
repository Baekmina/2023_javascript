const defaultResult = 0;
let currentResult = defaultResult;

// array (데이터 목록 관리를 위해 사용)
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

  // 배열에 새로운 요소 추가
  logEntries.push(enterrNumber);

  // 배열의 특정 값 가져오기 (요소 뒤 인덱스 값 첨부)
  console.log(logEntries[0]);
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
