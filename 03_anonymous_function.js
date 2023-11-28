const startGameBtn = document.getElementById("start-game-btn");

// const start = function() { // 익명 함수 (function 뒤에 이름이 없이 () 공란이 오는 것)
//   console.log("Game is starting...");
// };

// 익명 함수 (함수에서 또 다른 함수를 참조할 때 좋음)
startGameBtn.addEventListener("click", function () {
  // 어디에도 선언되지 않은 age를 넣었을 때 error난 곳이 어딘지 명확히 알 수 없음
  console.log("Game is starting...", age); // at HTMLButtonElement.<anonymous>
});

// 익명 함수에 이름을 꼭 사용해야함.
startGameBtn.addEventListener("click", function startGame() {
  console.log("Game is starting...", age); // at HTMLButtonElement.startGame
});
