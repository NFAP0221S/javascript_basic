let a = 1;
let b = 2;

console.log(a + b); // 3
console.log(a * b); // 2
console.log(a - b); // -1
console.log(a / b); // 0.5
console.log(a / b); // 0.5
console.log(a % b); // 1

//------------------------------------------------------//

let st1 = '1';
let st2 = '2';
// 문자형 변수끼리 이어 붙이는걸 연결연산이라고 함
console.log(st1 + st2) // 12
let st3 = '1';
let st4 = 2;
// 묵시적 형변환 
console.log(st1 + st2) // 12

//------------------------------------------------------//

let i = 5;
// 복합연산자 ( +=, -=, *=, /= )
i += 10 // i = i + 10
console.log(i) // 15

//------------------------------------------------------//

let j = 10;
// 증감 연산자 ( ++, -- )
j++ // ++이 변수 뒤에 붙는걸 ( 후위연산 ) , 반대는 ( 전위연산 )
console.log(j) // 11

let j2 = 10;
// 후위연산은 ++선언 후 그 다음 연산이 실행됨
console.log(j++) // 10

let j3 = 10;
// 전위연산은 ++선언시 바로 연산이 되어 할당
console.log(++j3) // 11

//------------------------------------------------------//

// ! 는 not 의미
console.log(!true); // false
console.log(!false); // true

// 피연산자 둘다 true여야 ( true )
// 피연산자true 연산자AND 피연산자true
console.log(true && true); // true
console.log(true && false); // false

// 둘중 하나만 true 면 ( true )
// true OR true
console.log(true || false); // true
console.log(false || false); // false

//------------------------------------------------------//

let compA = 1 == '1'; // 묵시적 형변환
console.log(compA); // true

let compB = 1 != '1'; // 묵시적 형변환
console.log(compB); // false

let compC = 1 === '1'; // ===은 Type 까지 비교
console.log(compC); // false

let compD = 1 !== '1';
console.log(compD); // true



let num = 1 > 2; 
console.log(num); // false
let num2 = 1 < 2; 
console.log(num2); // ture
let num3 = 1 <= 2; 
console.log(num3); // ture
let num4 = 1 >= 2; 
console.log(num4); // false

//------------------------------------------------------//

let k = 1; // js는 동적타입 언어라 숫자형으로 초기화 후
k = '1';  // 문자형을 할당해도 상관없음
// typeof 는 변수의 자료형을 출력함
console.log(typeof k); // string

//------------------------------------------------------//

let l;
// null 변형 연산자 ( ?? )
l = l ?? 10; // 피연산자 중 undefined이 아닌걸 할당해줌
console.log(l) // 10