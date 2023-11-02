const defaultResult = 0;
let currentResult = defaultResult;

function add() {
  currentResult = currentResult + parseInt(userInput.value);
  // parseInt = 소숫점 자리가 없는 숫자 (정수)
  // parseFloat = 소숫점 자리가 있는 숫자

  outputResult(currentResult, "");
}

addBtn.addEventListener("click", add);
