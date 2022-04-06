// 객체
// 보통 객체 리터럴 방식을 선호

let person = new Object(); // 객체 생성자 방식
let obj = {}; // 객체 리터럴 방식

obj = {
    key1 : "value", // 프로퍼티 ( 객체 프로퍼티 )
    key2 : 123,
    key3 : true,
    key4 : undefined,
    key5 : [1, 2],
    key6 : function() {}
}; // 객체 리터럴 방식

// 프로퍼티의 값(value)에 접근하는 것을 표기법 이라 함
console.log(obj.key1); // value, 점 표기법
console.log(obj.key3); // true

// 괄호 표기법
console.log(obj['key4']); // undefined, 괄호안에는 문자열로 입력

// 괄호 표기법에 문자가아닌 변수로 넣을경우
const key5 = 'key5'
console.log(obj[key5]); // [ 1, 2 ]

