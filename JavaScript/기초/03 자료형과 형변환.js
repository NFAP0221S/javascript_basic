// 자료형에는 
// Primitive Data Type 과 ( 원시 타입 ) or 내장형 타입, 기본형 타입
// * 한번에 하나의 값만 가질 수 있음 *
// * 하나의 고정된 저장 공간 이용 *

// Non-Primitive Data Type이 있음 ( 비 원시 타입 )
// * 한번에 여러 개의 값을 가질 수 있음 *
// * 여러 개의 고정되지 않은 동적 공간 사용 *

let num = 12; //정수

let pi = 3.14; //실수

let inf = Infinity;

let minusInf = -Infinity;

let nan = NaN;

//------------------------------------------------------//

let x = '커피';

let x2 = '두 잔';

let x3 = `커피 ${x2}`;
console.log(x3) // 커피 두잔

//------------------------------------------------------//

//boolean
let buttonOn = true;
let buttonOff = false;

//------------------------------------------------------//

let n = null;
console.log(n); //null

//------------------------------------------------------//

let variable;
console.log(variable); // undefined

//------------------------------------------------------//

let num1 = 10;
let num2 = '2'
// 형변환: 캐스팅, 묵시적 형변환
console.log(num1 * num2) // 20, num2의 문자형을 숫자형으로 바꿔 계산

// 덧셈은 묵시적 형변환이 일어나지 않음
let num3 = 10;
let num4 = '2';

console.log(num3 + num4); // 102

let num5 = 10;
let num6 = '2';
// 문자형에 parseInt()를 사용하면 int형으로 바뀜
console.log(num5 + parseInt(num6)); // 12

