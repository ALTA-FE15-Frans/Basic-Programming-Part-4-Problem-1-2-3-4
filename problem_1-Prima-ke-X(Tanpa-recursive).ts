function primeX(number : number) : number {

  let primes: number[] = [];
  let currentNumber: number = 2;
  while (primes.length < number) {
    let isPrime: boolean = true;
    for (let i = 2; i < currentNumber; i++) {
      if (currentNumber % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(currentNumber);
    }
    currentNumber++;
  }
  return primes[number - 1];
}

console.log(primeX(1)); // 2
console.log(primeX(5)); // 11
console.log(primeX(10)); // 29
console.log(primeX(15)); // 47
console.log(primeX(20)); // 71
