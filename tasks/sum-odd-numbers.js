function sumOddNumbers(rawNumbers) {
    const odd = rawNumbers.filter(item => item % 2 !== 0)

    return odd.reduce((previous, current) => {
        return previous + current
    })
}
