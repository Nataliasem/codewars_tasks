function uniteUnique(...arr) {
    const united = arr.reduce((acc, current) => {
        return acc.concat(current)
    }, [])

    return Array.from(new Set(united))
}


// console.log(uniteUnique([1, 2, 3], [4, 1, 4], [5, 6, 7, 7])) // [1, 2, 3, 4, 5, 6, 7]


function uniteUniqueFlat() {
    const united = [...arguments].flat()

    return Array.from(new Set(united))
}

console.log(uniteUniqueFlat([1, 2, 3], [4, 1, 4], [5, 6, 7, 7])) // [1, 2, 3, 4, 5, 6, 7]