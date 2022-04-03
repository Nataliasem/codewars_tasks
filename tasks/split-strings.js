// Complete the solution so that it splits the string into pairs of two characters.
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    if(!str) {
        return []
    }

    const split = str.split('')

    let pairs = []

    for(let i = 0; i < split.length; i += 2) {
        const slice = split.slice(i, i + 2)

        if(slice.length === 1) {
            slice.push('_')
        }

        pairs.push(slice.join(''))
    }

    return pairs
}
