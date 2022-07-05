function fibonacci (num) {
    let fib = [0, 1];
    for (let i = 2; i <= num ; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[num];
}

function obtenArray() {
    let array = [];
    for (let i = 0; i < fibonacci(6); i++) {
        array = [...array, fibonacci(i)];
    }
    return array;
}

console.log(fibonacci(6));
console.log(obtenArray(6));

