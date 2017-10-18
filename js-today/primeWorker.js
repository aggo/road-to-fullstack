const isPrime = num => {
    num = Number(num);
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num !== 1;
};

onmessage = ({data: num}) => postMessage(isPrime(num));
