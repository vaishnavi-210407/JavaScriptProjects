function isPrime(n) {

    if(n <= 1) {
        return "Not Prime";
    }

    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return "Not Prime";
        }
    }

    return "Prime";

}

console.log(isPrime(7));
console.log(isPrime(12));