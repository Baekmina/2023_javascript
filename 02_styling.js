const section = document.querySelector("section");

// section.style.backgroundColor = "blue";
// section.className = ""; // 빈 클래스 이름이 설정되어 초기화 됨.

// 기존 + 새로운 클래스 설정할 때
const button = document.querySelector("button");

button.addEventListener("click", () => {
  // if (section.className === "red-bg visible") {
  //   section.className = "red-bg invisible";
  // } else {
  //   section.className = "red-bg visible";
  // }

  // section.classList.toggle("visible");
  section.classList.toggle("invisible");
});
