const startGameBtn = document.getElementById("start-game-btn");

function startGame() {
  console.log("Game is starting...");
}

// 메서드 = 객체에 함수가 저장된 것 (객체에 대한 함수)
const person = {
  greet: function greet() {
    console.log("Hello there");
  },
};

person.greet();

// addEventListener = startGameBtn의 메서드
startGameBtn.addEventListener("click", startGame);
