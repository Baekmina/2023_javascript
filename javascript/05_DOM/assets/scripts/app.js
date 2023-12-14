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
const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");

// add
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
// const confirmAddMovieButton = addMovieModal.querySelector(".btn--success");

// input
const userInputs = addMovieModal.querySelectorAll("input");
// const userInputs = addMovieModal.getElementsByTagName('input')

// new movies
const movies = [];

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

const clearMovieInput = () => {
  // userInputs 상수에 저장된 요소를 사용해 값을 삭제함
  for (const userInput of userInputs) {
    // userInputs의 모든 userInput을 거치게 만들어서 모든 사용자 입력 요소 반복
    userInput.value = "";
  }
};

const cancelAddMovieHandler = () => {
  toggleMovieModal();
  clearMovieInput();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  // trim = 입력값의 시작 및 끝에 있는 불필요한 공백을 제거해줌
  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("Please enter valid valus (rating between 1 and 5).");
    return;
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  toggleMovieModal();
  clearMovieInput();
};

const backdropClickHandler = () => {
  toggleMovieModal();
};

startAddMovieButton.addEventListener("click", toggleMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
