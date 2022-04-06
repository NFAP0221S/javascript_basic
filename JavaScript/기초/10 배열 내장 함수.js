// 배열 내장 함수

const arr = [1,2,3,4];

// forEach, 배열의 요소들을 한번씩 순회
arr.forEach((elm)=> console.log(elm));
// 1
// 2
// 3
// 4

// map, arr의 모든 요소를 순서대로 순회하며 리턴값을 반환할 수 있음
const newArr = arr.map((elm) => {
    return elm * 2;
});
console.log(newArr) // [ 2, 4, 6, 8 ]

// includes, 주어진 배열에서 전달받은 인자와 값이 일치하는지를 확인함.
const arr2 = [1,2,3,4];

let number = 3;
let number2 = "3";

console.log(arr2.includes(number)); // true
console.log(arr2.includes(number2)); // false

// indexOf, 주어진 배열에서 주어진 인자와 일치하는 인덱스를 반환함
const arr3 = [1,2,3,4];

let number3 = 3;
let number4 = "3";
console.log(arr.indexOf(number3)); // 2
console.log(arr.indexOf(number4)); // -1, 배열안에 없는 값을 넣으면 -1 출력

// findIndex, 만족하는 요소의 인덱스를 반환
const arrObj = [
    { color : "red" },
    { color : "black" },
    { color : "blue" },
    { color : "green" }
]

console.log(arrObj.findIndex( (elm) => elm.color === "red" )); // 0
console.log(arrObj.findIndex( (elm) => elm.color === "blue" )); // 2

// find, 만족하는 요소자체를 반환
const element = arrObj.find((elm) => {
    return elm.color === 'blue';
});

console.log(element);

// filter, 필터링
const arr4 = [
    { num : 1, color : 'red'},
    { num : 2, color : 'black'},
    { num : 3, color : 'blue'},
    { num : 4, color : 'green'},
    { num : 5, color : 'blue'},
];

console.log(arr4.filter((elm) => elm.color === 'blue'));

// slice, 자르기
console.log(arr4.slice(0, 4)); // 0번부터 3번까지

// concat, 붙이기
const arrColor1 = [
    { num : 1, color : 'red'},
    { num : 2, color : 'black'},
    { num : 3, color : 'blue'}
];

const arrColor2 = [
    { num : 4, color : 'green'},
    { num : 5, color : 'blue'},
];

console.log(arrColor1.concat(arrColor2)); // arrColor1과 arrColor2가 합쳐짐

// sort, 원본배열 정렬 ( 문자열 기준 )
let chars = ["나","다","가"];

chars.sort();

console.log(chars); // [ '가', '나', '다' ]

// 비교함수를 사용하여 숫자정렬
let numbers = [0, 1, 3, 2, 10 ,30, 20];

const compare = (a,b) => {
    if (a > b){
        // 크다
        return 1;
    }
    if (a < b){
        // 작다
        return -1;
    }
    // 같다
    return 0;
};

numbers.sort(compare);

console.log(numbers); // [ 0, 1, 2, 3, 10, 20, 30 ]

// join
const arrStr = [ '1픽', '정글', '양보', '부탁드릴게요'];

console.log(arrStr.join("===")); // 1픽===정글===양보===부탁드릴게요
