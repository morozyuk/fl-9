function isPrime(number) {
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            return console.log(false);
        }
    }
    return console.log(true);
}
