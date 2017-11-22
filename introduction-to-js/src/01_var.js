export function forLoop() {
    console.log(i);

    for (var i = 1; i < 5; i++) {
        console.log(i);
    }

    console.log(i);
    console.log(i);
}

export function noDef() {
    console.log(i);
}

export function varAfter() {
    console.log(i);
    var i = 243;
}

export function constAfter() {
    console.log(i);
    const i = 243;
}

export function letAfter() {
    console.log(i);
    let i = 243;
}

export function constEx() {
    // const a = 243;
    // a = 2;

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
