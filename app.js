// array method
const numbers = [1, 2, 3];
console.log(numbers);

// 아래 두 method는 사용할 일이 X, 알아만 둘 것
// const moreNumbers = Array(1, 5); // 배열 생성자
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2);
// console.log(yetMoreNumbers);

// iterables
const listItems = document.querySelectorAll("li");
console.log(listItems);

// Array.from = iterables이나 유사 배열 객체를 변환
// const moreNumbers = Array.from("Hi!"); // "H", "i", "!" 분리
// console.log(moreNumbers);

const arrayListItems = Array.from(listItems); // 진짜 배열로 변환
console.log(arrayListItems);
