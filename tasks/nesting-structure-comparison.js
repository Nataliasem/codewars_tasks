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


function transformStructure(checked){
    if (!Array.isArray(checked)){
        return 'a'
    }

    if (checked.every(item => !Array.isArray(item))){
        return checked.length
    }

    return checked.map(elem=>transformStructure(elem)).join('')
}

const compareNestingStructure = (array1, array2) => {
    const comparableString1 = transformStructure(array1)
    const comparableString2 = transformStructure(array2)

    return comparableString1 === comparableString2
}

compareNestingStructure([ 1, [ 1, 1, [9, [0, 9 ]] ] ], [ [ 1, 1 ] ])

