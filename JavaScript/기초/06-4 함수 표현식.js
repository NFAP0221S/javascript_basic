// 함수 표현식과 함수 선언식
// 호이스팅이란?

// 호이스팅
console.log(helloA()); // 반갑습니다.

// 5 line 코드가 실행된 이유
// 함수 선언식으로 선언된 함수는
// 프로그램 실행전에 line 최상단으로 끌어올려진다.
// 이것을 호이스팅이라고 함.

// but, 함수 표현식은 호이스팅이 불가
// console.log(helloB()); //error

function helloA() {
    return "반갑습니다";
}; // 함수 선언식

let helloB = function() {
    return "반갑습니다.";
}; // 함수 표현식