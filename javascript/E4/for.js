console.log("1. Print all number between -10 and 19");
for (let index = -10; index <= 19; index++) {
    console.log(index);
}

console.log("2. Print all even numbers between 10 and 40");
for (let index = 10; index <= 40; index++) {
    if (index % 2 == 0) console.log(index);
}

console.log("3. Print all odd numbers between 300 and 333");
for (let index = 300; index <= 333; index++) {
    if (index % 2 == 1) console.log(index);
}

console.log("4. Print all numbers divisible by 5 and 3 between 5 and 50");
for (let index = 5; index <= 50; index++) {
    if (index % 5 == 0 && index % 3 == 0) console.log(index);
}