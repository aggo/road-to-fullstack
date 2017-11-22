export function sum1(a, b) {
    return a + b;
}

export const sum2 = (a, b) => a + b;

export const sum3 = sum1;

export const returnFunc = () => {
    return (a) => 2 * a;
};

export const qq = () => (a) => 2 * a;

export const funcParam = (callback) => {
    return callback(42);
};


export const contextObject = {
    someProperty: 42,
    func: function () {
        console.log(this);
    },
};

const x = 123;

export function printContext() {
    console.log(this, x);
}

export const printContextArrow = () => {
    console.log(this, typeof this);
};


export class Q {
    constructor() {
        this.method1 = () => {
            return this;
        };
    }

    callMe() {
        return this;
    }
}