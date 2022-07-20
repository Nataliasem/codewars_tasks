// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711
// f(n) = f(n-1) + f(n+1)

function fibonacci(n) {
    if(n <= 0) {
        return 0
    }

    if(n <= 2) {
        return 1
    }

  console.log(n - 1, n - 2)

    return (fibonacci(n-1) + fibonacci(n - 2))

}

console.log(fibonacci(2))

function iterationFibonacci(n) {
    if(n <= 0) {
        return 0
    }

    if(n <= 2) {
        return 1
    }

    let result = 1
    let prevNum = 1

    for (let i = 0; i < n - 2; i++) {
        let tmp = result
        result += prevNum
        prevNum = tmp
    }

    return result
}

console.log(iterationFibonacci(7))
