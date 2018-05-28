export function forLoop() {
    console.log(i);

    for (var i = 1; i < 5; i++) {
        console.log(i);
    }

    console.log(i);
    console.log(i);
}
/*
=>
undefined

1
2
3
4

5
5

-> because the VAR "extracts" i at the beginning of the scope (the fct)
 */

export function noDef() {
    console.log(i);
} //=> ERROR: i is not defined

export function varAfter() {
    console.log(i);
    var i = 243;
} //=> prints 243

//////////////////=> VAR is problematic

export function constAfter() {
    console.log(i);
    const i = 243;
} // => ERROR: i is not defined

export function letAfter() {
    console.log(i);
    let i = 243;
} // => ERROR: i is not defined

export function constEx() {
    // const a = 243;
    // a = 2;   // ERROR: assignment to constant variable

    const a = {};
    // a = {};
    a.prop = 'a random string';

    console.log(JSON.stringify(a));
}

export function letEx() {
    let a = 243;
    a = 2;

    // let a = {};
    // a = {};
    // a.a = 'a random string';

    console.log(a);
}
