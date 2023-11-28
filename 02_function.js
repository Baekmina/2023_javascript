const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("Game is starting...");
}

// 함수를 직접 변수나 상수에 저장할 수도 있음.
// 함수를 표현식으로 사용하도록 생성
const start = function () {
  // 익명 함수 (function 뒤에 () 공란이 오는 것)
  console.log("Game is starting...");
};

// 함수를 표현식으로 사용할 때 해당 변수 또는 상수의 이름을 똑같이 붙여줘야 함
startGameBtn.addEventListener("click", start);
