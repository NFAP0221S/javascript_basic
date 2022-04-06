// 배열
// 배열은 비 원시 자료형

let arr = []; // 배열 리터럴
let arr2 = new Array(); // 배열 생성자

arr = [1, "2", true, null, undefined, {}, [], function() {}]; // 모든지 배열에 넣을 수 있음

//------------------------------------------------------//
arr = [1, 2, 3, 4, 5];

arr.push({ key: "value"}); // 마지막에 추가
console.log(arr); // [ 1, 2, 3, 4, 5, { key: 'value' } ]
console.log(arr.length); // 6