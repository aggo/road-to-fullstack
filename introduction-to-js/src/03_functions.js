export function sum1(a, b) {
    return a + b;
}

export const sum2 = (a, b) => a + b;

export const sum3 = sum1;

export const returnFunc = () => {
    return (a) => 2 * a;
}; // if console.log(returnFunc)=> (a)=>2*a
// call using returnFunc()(3) => 6


export const qq = () => (a) => 2 * a;
// can call qq()()() = currying

export const funcParam = (callback) => {
    return callback(42);
};
// console.log(funcParam): (callback)=>{..}
// can do funcParam(console.log) => will print 42
// -> same as funcParam((a)=>{console.log(a)})



export const contextObject = {
    someProperty: 42,
    func: function () {
        console.log(this);
    },
};

const x = 123;

export function printContext() {
    console.log(this, x);
    // this is undefined here, because the fct is not declared in a context
}

// can call a function with func() or with func.call(context, param1, param2)
// => if i call func(1,2,3), the number 1 will override the context

// newX = printContext.bind();
// console.log(newX(1,2,3)) will print undefined, 2, 3
// newX = printContext.bind({a:55});
// console.log(newX(1,2,3)) will print 55, 2, 3
// console.log(newX(1,3,4)) will print 55, 3, 4 -> context 55 will be kept


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