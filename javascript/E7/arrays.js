function printReverse(array) {
    for (let index = array.length - 1; index >= 0; index--) {
        console.log(array[index]);
    }
}

printReverse([1, 2, 3, 4]);
// 4
// 3
// 2
// 1

printReverse(["a", "b", "c"]);
// c
// b
// a

function isUniform(array) {
    var firstElement = array[0];
    for (let index = 1; index < array.length; index++) {
        if (firstElement !== array[index]) return false;
    }
    return true;
}

console.log(isUniform([1, 1, 1, 1])); // true
console.log(isUniform([2, 1, 1, 1])); // false
console.log(isUniform(["a", "b", "p"])); // false
console.log(isUniform(["b", "b", "b"])); // true

function sumArray(array) {
    var sum = 0;
    array.forEach(function (element) {
        sum += element;
    });
    return sum;
}

console.log(sumArray([1, 2, 3])); // 6
console.log(sumArray([10, 3, 10, 4])); // 27
console.log(sumArray([-5, 100])); // 95

function max(array) {
    var maxValue = array[0];

    for (let index = 1; index < array.length; index++) {
        if (array[index] > maxValue) maxValue = array[index];
    }

    return maxValue;
}

console.log(max([1, 2, 3])); // 3
console.log(max([10, 2, 10, 4])); // 10
console.log(max([-5, 100])); // 100