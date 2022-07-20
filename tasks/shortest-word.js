// Simple, given a string of words, return the length of the shortest word(s).
//  String will never be empty and you do not need to account for different data types.

function findShort(checkedString) {
    const splitString = checkedString.split(' ')

    return Math.min(...splitString.map(item => item.length))
}

function findShortBySort(checkedString) {
    const splitString = checkedString.split(' ')

    const splitSorted = splitString.sort((a, b) => {
        return a.length - b.length
    })

    return splitSorted[0]
}

console.log(findShortBySort('123 woierowieurowue 345683 sd a'))
