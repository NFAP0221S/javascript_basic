// switch 문
// 조건의 체이닝이 많을 것 같을 때 사용

let champ = '오른'; 

// braek를 쓰지않으면 해당 case 밑에도 실행됨
switch (champ) {
    case '자야': 
        console.log('원딜');
        break; 
    case '오른': // 해당 case에서 실행
        console.log('탱커');
        break; // break 사용하여 탱커 출력 후 종료
    case '제드':
        console.log('암살');
        break;
    case '리븐':
        console.log('브루저');
        break;
    default:
        console.log('트롤');
        break;
} 