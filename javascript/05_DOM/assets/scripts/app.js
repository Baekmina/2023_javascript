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

const entryTextSection = document.getElementById("entry-text");

const deleteMovieModal = document.getElementById("delete-modal");

// new movies
const movies = [];

const toggleBackdrop = () => {
  // toggle = class 값이 있는지 체크하고 없으면 추가, 있으면 제거
  backdrop.classList.toggle("visible");
};

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  } else {
    entryTextSection.style.display = "none";
  }
};

const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  // splice = 배열에서 사용 가능. (index, 제거할 항목의 숫자)
  movies.splice(movieIndex, 1);
  const listRoot = document.getElementById("movie-list");
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);
  closeMovieDeletionModal();
  updateUI();
};

const startDeleteMovieHandler = (movieId) => {
  // 이 모달은 실행 시 보이지 않기 때문에 제거하면 안됨 => toggle(X), add(O)
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();

  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  // const confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");
  let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  // 복제 노드(cloneNode)를 대체하기(replaceWith)
  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  // confirmDeletionButton.removeEventListener(
  //   "click",
  //   deleteMovieHandler.bind(null, movieId)
  // );
  cancelDeletionButton.removeEventListener("click", closeMovieDeletionModal); // will not work

  cancelDeletionButton.addEventListener("click", closeMovieDeletionModal);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.innerHTML = `
    <div class='movie-element__image'>
      <img src='${imageUrl}' alt='${title}' />
    </div>
    <div class='movie-element__info'>
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;
  // bind = 실행된 함수에서 받게될 인자를 미리 구성
  newMovieElement.addEventListener(
    "click",
    startDeleteMovieHandler.bind(null, id)
  );
  const listRoot = document.getElementById("movie-list");
  listRoot.append(newMovieElement);
};

const closeMovieModal = () => {
  // remove = class 이름을 삭제
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
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
  closeMovieModal();
  toggleBackdrop();
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
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInput();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInput();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovieHandler);
confirmAddMovieButton.addEventListener("click", addMovieHandler);
