// Hoisting
// javascript에서 스크립트를 로드할 때 전체 스크립트를 확인해서 함수를 찾은 뒤 자동으로 로드하고 등록해서 실제 사용하는 코드 아래에 함수를 작성하도록 하는 것 (var)

// var userName = "Max"; //undefined
// var userName = "Manuel"; //Manuel 다시 선언되었기에 읽힘.
userName = "Max"; //"Max" // 자동으로 var을 앞에 읽게 해서 Max가 읽힘.

console.log(userName);

// let userName = 'Max'; //error
