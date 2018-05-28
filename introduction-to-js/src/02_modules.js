export const someConst = 2;

export const someArrow = x => 2 * x;
export const someArrowThatReturnsSth = x => ({2: 2 * x});

// no matter how many params are expected, you can pass however many you want
export const someArrow2 = (x, y) => {
    return 2 * x;
};

export function someArrow3(x) {
    return 2 * x;
}

export function someFunc() {
    return 42;
}

const x = 2;

export default { // useful when somebody wants to import anything from this file => import q from '02_module'
    name: 'this is the default module',
};

// importing stuff from a module: use import {sth} when you want a function or so
// use import sth from module when you want the default import