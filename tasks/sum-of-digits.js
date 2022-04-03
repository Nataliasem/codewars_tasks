// Given n, take the sum of the digits of n.
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.
//

// Examples
// 16  -->  1 + 6 = 7
// 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
    const nArray = n.toString().split('').map(item => Number(item))

    const result = nArray.reduce((prev, curr) => prev + curr)

    if(result >= 10) {
        return digital_root(result)
    } else {
        return result
    }
}

function digital_root_1(n) {
    if (n < 10) {
        return n
    }

    const res = n.toString().split('').reduce((prev, curr) => prev + +curr)

    return digital_root(res)
}

function digital_root_2(n) {
    while (n > 9) {
        n = (''+n).split('').reduce(function(s,d) {
            return +s + +d
        })
    }

    return n
}

