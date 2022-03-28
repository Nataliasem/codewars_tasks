// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears).
// "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on.
// It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

// Note for C
// The two arrays have the same size (> 0) given as parameter in function comp.

function comp(array1, array2){
    if (Array.isArray(array1) === false || Array.isArray(array2) === false) {
        return false
    }

    if(array1.length === 0 || array2.length === 0) {
        return false
    }

    // if(array1.length !== array2.length) {
    //     return false
    // }

    const squareRoots = array2.map(elem => Math.sqrt(elem))
    console.log(squareRoots)

    console.log(squareRoots.every(item => array1.includes(item)))
}

// false
const a1 =  [3, 7, 2, 0, 8, 0, 9, 8, 10, 6, 1, 7, 10, 7, 1, 0, 8, 5, 2, 4, 10, 6];
const a2 =  [9, 0, 64, 36, 100, 64, 0, 1, 4, 1, 64, 49, 49, 4, 36, 49, 1, 81, 100, 100, 16, 25];

comp(a1, a2);

// true
// const a3 = [121, 144, 19, 161, 19, 144, 19, 11];
// const a4 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

// comp(a3, a4);