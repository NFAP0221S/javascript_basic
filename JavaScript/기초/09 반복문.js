// 반복문

const arr = ["a", "b", "c"];

for (let i = 0; i < arr.length; i++) {
    // 반복 수행할 명령
    console.log(arr[i]);
    // a
    // b
    // c
}


// 객체 반복

let person = {
    name: "이정환",
    age: 25,
    tall: 175
};

const personKeys = Object.keys(person); // person 객체의 keys를 상수에 배열로 반환
// const personValues = Object.values(person); // person 객체의values를 상수에 배열로 반환

console.log(personKeys); // [ 'name', 'age', 'tall' ]

for (let i = 0; i < personKeys.length; i++) {
    console.log(personKeys[i]);
    // name
    // age
    // tall
}


for (let i = 0; i < personKeys.length; i++) {
    const curKey = personKeys[i];
    const curVal = person[curKey]; // person 객체의 value값들만 뽑기

    console.log(`${curKey} : ${curVal}`);
    // name : 이정환
    // age : 25
    // tall : 175
}