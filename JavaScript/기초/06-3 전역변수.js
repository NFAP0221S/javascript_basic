//함수 외 선언
let count = 1; //전역변수

function getArea(width, height) { 
    let area = width * height; 

    console.log(count) // 1, 지역변수 출력

    return area; 
}

let area1 = getArea(100,200) 
