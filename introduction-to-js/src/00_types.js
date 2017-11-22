export default function () {
    console.log(42, typeof 42);

    console.log('str', typeof 'str');

    console.log({a: 2}, typeof {a: 2});

    console.log([1, 2], typeof [1, 2]);

    console.log(null, typeof null);

    console.log(undefined, typeof undefined);

    console.log(new Date(), typeof new Date());

    console.log('function(){}', typeof function () {
    });

    console.log('() => null', typeof (() => null));
}
