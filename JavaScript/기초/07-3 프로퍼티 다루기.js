// 프로퍼티 추가,수정,삭제

let hobby = {
    list1 : "드라이브",
    list2 : "게임"
};

// 표기법으로 프로퍼티 추가
hobby.list3 = "만화";
hobby["list4"] = "코딩";

console.log(hobby) // { list1: '드라이브', list2: '게임', list3: '만화', list4: '코딩' }

// 프로퍼티 수정
hobby.list1 = "노래";
hobby["list2"] = "유튜브";
console.log(hobby) // { list1: '노래', list2: '유튜브', list3: '만화', list4: '코딩' }

// 프로퍼티 삭제

delete hobby['list1'];
console.log(hobby) // { list2: '유튜브', list3: '만화', list4: '코딩' }

// 프로퍼티 추천 삭제법

let hobby2 = {
    list1 : "드라이브",
    list2 : "게임"
};

hobby2.list1 = null;
console.log(hobby2) // { list1: null, list2: '게임' }
