// 괄호표기법을 사용하면 좋은 상황
// 함수로 동적 파라미터 전달

let travel = {
    list1 : "바다",
    list2 : "산"
};

console.log(getPropertyValue("list1"))

function getPropertyValue(key) {
    return travel[key];
}