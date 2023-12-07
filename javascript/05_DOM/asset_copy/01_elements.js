const h1 = document.getElementById("main-title");

h1.textContent = "Some new title!";
h1.style.color = "white";
h1.style.backgroundColor = "black";

const li = document.querySelector("li:last-of-type"); // 마지막 요소에 적용
li.textContent = li.textContent + " (Changed!)";

// 전체요소
const body = document.body;

const listItemElements = document.querySelectorAll("li");

for (const listItemEl of listItemElements) {
  console.dir(listItemEl);
}
