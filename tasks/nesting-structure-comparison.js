// Complete the function/method (depending on the language) to return true/True,
// when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.


// [ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );
//
// // should return false
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );
// [ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );
//
// // should return true
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] );
//
// // should return false
// [ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );


// не массив - верни букву или цифру
// массив - верни длину массива
// преобразуй в строку и сравни




const compareNestingStructure = (array1, array2) => {
    const comparable1 = array1.map(item => {
        if(Array.isArray(item) === false) {
            return 'a'
        }

        return item.map(i => Array.isArray(i) ? i.length : 'a').join('')
    })

    console.log(comparable1)

    const comparable2 = array2.map(item => {
        if(Array.isArray(item) === false) {
            return 'a'
        }

        return item.map(i => Array.isArray(i) ? i.length : 'a').join('')
    })

    console.log(comparable2)
}

compareNestingStructure([ 1, [ 1, 1, [9, [0, 9 ]] ] ], [ [ 2, 2 ], 2 ])

