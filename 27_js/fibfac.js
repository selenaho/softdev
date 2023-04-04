// Team Cereal Killers :: Selena Ho, Wanying Li
// SoftDev pd8
// K27 -- Basic functions in JavaScript
// 2023-04-04
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn


//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.

// factorial
function fact(n) {
    if (n < 2) {
        return 1;
    }
    return n * fact (n-1);
}

//tests
//console.log(fact(1));
//console.log(fact(2));
//console.log(fact(3));
//console.log(fact(4));
//console.log(fact(5));

// fibonacci
function fib(n) {
    if (n < 2) {
        return n;
    }
    return fib(n-1) + fib (n-2);
}

//tests
//console.log(fib(0))
//console.log(fib(1))
//console.log(fib(2))
//console.log(fib(3))
//console.log(fib(4))