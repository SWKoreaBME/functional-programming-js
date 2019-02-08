const _ = require("lodash");

// let's do some reduce method here

function filter(arr, predicate) {

    let idx = -1,
        len = arr.length,
        // 결과 배열은 입력받은 배열의 부분집합이다
        result = [];
    
    while(++idx < len) {
        let value = arr[idx];
        // 아래의 predicate 실행 결과가 true 이면 원소를 유지하고 false 면 버린다
        if (predicate(value, idx, this)) {
            result.push(value);
        }
    }
    return result;
}

// filter 는 배열에서 오류 데이터를 제거하는 용도로 자주 쓰인다!

// 아래 구문은 먼저 Valid (유효성 검사) test 를 진행한 후 fullname 을 output 으로 내뱉는다
_(persons).filter(isValid).map(fullname);

// 조건문 대신에 _.filter 를 사용하면 훨씬 코드가 간결해진다.

const bornIn1903 = person => person.birthYear === 1903;

// if 를 사용하지 않았음!
_(persons).filter(bornIn1903).map(fullname).join(" and ");

// 명령형 코드의 단점은 특정 문제의 해결만을 목표한다는 점이다. 