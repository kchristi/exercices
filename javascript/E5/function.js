function isEven(number) {
    return number % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(21));
console.log(isEven(68));
console.log(isEven(333));

function factorial(number) {
    var factorialNumber = 1;
    for (let index = 1; index <= number; index++) {
        factorialNumber = factorialNumber * index;
    }
    return factorialNumber;
}

console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

function kebabToSnake(kebabString) {
    return kebabString.replace(/-/g, "_");
}

console.log(kebabToSnake("hello-world"));
console.log(kebabToSnake("dogs-are-awesome"));
console.log(kebabToSnake("blah"));