// 객체의 프로퍼티가 함수이면 메서드, 그 외 멤버라 부름
// 메서드의 객체를 this로 사용 가능
const chim = {
    name : "침착맨", // 멤버
    sub : 100, // 멤버
    say : function() { // 메서드
        console.log(`구독 ${this["sub"]}만 축하`); // this == chim
    }
}; 

chim.say(); //구독 100만 축하