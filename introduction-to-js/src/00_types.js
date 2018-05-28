export default function () {
    console.log(42, typeof 42); //number

    console.log('str', typeof 'str'); //string

    console.log({a: 2}, typeof {a: 2}); //object

    console.log([1, 2], typeof [1, 2]); //object

    console.log(null, typeof null); //object

    console.log(undefined, typeof undefined); //undefined

    console.log(new Date(), typeof new Date()); //object

    console.log('function(){}', typeof function () { //function
    });

    console.log('() => null', typeof (() => null)); //function
}
