let num = parseInt(prompt("Enter a number to check prime:"));

function isPrime(num, i = 2) {
  if (num <= 1) return false;
  if (i === num) return true;
  if (num % i === 0) return false;

  return isPrime(num, i + 1);
}

console.log(isPrime(17) ? "Prime" : "Not Prime");
