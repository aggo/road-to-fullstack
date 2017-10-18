const spinnerStyle = document.getElementById('spinner').style;
setInterval(() => {
    spinnerStyle.opacity = Number(spinnerStyle.opacity) + .1;
    if (spinnerStyle.opacity >= 1) {
        spinnerStyle.opacity = 0;
    }
}, 100);

const isPrime = num => {
    num = Number(num);
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num !== 1;
};

const isPrimeTimes = (num, times) => new Array(times).fill(null).map(() => isPrime(num)).reduce((acc, val) => acc && val);

let responses = 0;
let targetResponses = 0;
let response = true;
let workers = new Array(8).fill(null)
    .map(() => {
        const worker = new Worker('primeWorker.js');
        worker.onmessage = ({data: resp}) => {
            response = response && resp;
            responses++;
            if (responses === targetResponses) {
                console.log('Is this prime 100 times with workers?', response, responses, targetResponses);
            }
        };
        return worker;
    });

const isPrimeTimesWorker = (num, times) => {
    responses = 0;
    response = true;
    targetResponses = times;
    new Array(times).fill(null).map(() => workers[Math.floor(Math.random() * 8)].postMessage(num));
};
