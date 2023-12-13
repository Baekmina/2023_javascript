// modal acess method
const addMovieModal = document.getElementById("add-modal");
// const addMovieModal = document.querySelector("#add-modal"); //querySelector의 경우 선택자 필요
// const addMovieModal = document.body.children[1]; //body의 두번째 요소

// add button acess method
const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector("header").lastElementChild; // 구조에 변경이 생기면 작동X

// baekdrop acess method
const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild;

// cancel
const CancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const CancleAddMovie = () => {
  toggleMovieModal();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
CancelAddMovieButton.addEventListener("click", CancleAddMovie);
