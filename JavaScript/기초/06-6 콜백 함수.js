// 콜백함수
// 다른함수에 매개변수로 함수를 넘겨주는 것

function checkMood (mood, goodCallback, badCallback) {
    if (mood === "good") {
        // 기분 좋을 때 하는 동작
        goodCallback();
    } else{
        // 기분이 좋지 않을 때 하는 동작
        badCallback();
    }
}

function cry() {
    console.log("ACTION :: CRY")
}

function sing() {
    console.log("ACTION :: SING")
}

function dance() {
    console.log("ACTION :: DANCE")
}

checkMood("sad", sing, cry); // ACTION :: CRY
