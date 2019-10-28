'use strict';

/**
* 入力値が負数の場合、0を返す。
*/
function fibonacci(nThNumber) {
    let smallerNumber = 0
    let biggerNumber = 1
    let result = 0

    if (nThNumber <= 0) {
        return 0
    }

    if (nThNumber == 1) {
        return 1
    }

    for (let currentNumber = 2; currentNumber <= nThNumber; currentNumber++) {
        result = smallerNumber + biggerNumber
        smallerNumber = biggerNumber
        biggerNumber = result
    }

    return result
}

const assert = require('assert');
assert.equal(fibonacci(0), 0, `0のフィボナッチ数は0ですが、実際は${fibonacci(0)}でした`);
assert.equal(fibonacci(1), 1, `1のフィボナッチ数は1ですが、実際は${fibonacci(1)}でした`);
assert.equal(fibonacci(2), 1, `2のフィボナッチ数は1ですが、実際は${fibonacci(2)}でした`);
assert.equal(fibonacci(3), 2, `3のフィボナッチ数は2ですが、実際は${fibonacci(3)}でした`);
assert.equal(fibonacci(4), 3, `4のフィボナッチ数は3ですが、実際は${fibonacci(4)}でした`);
assert.equal(fibonacci(5), 5, `5のフィボナッチ数は5ですが、実際は${fibonacci(5)}でした`);
assert.equal(fibonacci(10), 55, `10のフィボナッチ数は55ですが、実際は${fibonacci(10)}でした`);
assert.equal(fibonacci(15), 610, `15のフィボナッチ数は610ですが、実際は${fibonacci(15)}でした`);
assert.equal(fibonacci(20), 6765, `20のフィボナッチ数は6765ですが、実際は${fibonacci(20)}でした`);
assert.equal(fibonacci(30), 832040, `30のフィボナッチ数は832040ですが、実際は${fibonacci(30)}でした`);
assert.equal(fibonacci(40), 102334155, `40のフィボナッチ数は102334155ですが、実際は${fibonacci(40)}でした`);
assert.equal(fibonacci(50), 12586269025, `50のフィボナッチ数は12586269025ですが、実際は${fibonacci(50)}でした`);
console.log('すべてのテストを通過しました');