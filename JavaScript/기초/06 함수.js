// 중복되는 코드를 효율적으로 줄여 사용하기 위해
// 함수를 사용함

function getArea(width, height) { // width, height ( 매개 변수 )
    let area = width * height;
    console.log(area)
    
    return area; // 함수 반환 값
}
// 함수를 변수에 할당
let area1 = getArea(100,200) // 20000

console.log('area1:', area1)