// modal acess method
const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal"); //querySelector의 경우 선택자 필요
// const addMovieModal = document.body.children[1]; //body의 두번째 요소

// add button acess method
// const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector("header").lastElementChild; // 구조에 변경이 생기면 작동X
const startAddMovieButton = document.querySelector("header button");

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
};

startAddMovieButton.addEventListener("click", toggleMovieModal);

// const addMovieBtn = document.getElementById("add-button");
// const addModal = document.getElementById("add-modal");

// addMovieBtn.addEventListener("click", () => {
//   addModal();
// });
