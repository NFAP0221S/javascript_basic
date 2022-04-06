// 객체의 존재하지않는 프로퍼티 접근을 하면?

const chim = {
    name : "침착맨", // 멤버
    sub : 100, // 멤버
    say : function() { // 메서드
        console.log(`구독 ${this["sub"]}만 축하`); // this == chim
    }
}; 

console.log(chim.age); // undefined
console.log(`name : ${"name" in chim}`); // true, name이라는 프로퍼티가 있는지 확인
console.log(`tall : ${"tall" in chim}`); // false, tall이라는 프로퍼티가 있는지 확인
