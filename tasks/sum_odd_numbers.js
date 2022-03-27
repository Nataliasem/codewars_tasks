function sum_odd_numbers(rawNumbers) {
    const odd = rawNumbers.filter(item => item % 2 !== 0)

    return odd.reduce((previous, current) => {
        return previous + current
    })
}
