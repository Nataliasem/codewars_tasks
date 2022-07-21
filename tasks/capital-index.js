// Возвращает индексы заглавных букв
function capitals_1(str) {
    return str.split('').map(letter => {
        return (/[A-Z]/g).test(letter) ? str.indexOf(letter) : letter
    }).filter(item => typeof item === 'number')
}

console.log(capitals_1('justForTest'))
console.log(capitals_2('CodEWaRs'))



function capitals_2(str) {
    return str.split('').reduce((result, currentLetter, index) => {
        if(currentLetter === currentLetter.toUpperCase()) {
            result.push(index)
        }

        return result
    }, [])
}

console.log(capitals_2('justForTest'))
console.log(capitals_2('CodEWaRs'))