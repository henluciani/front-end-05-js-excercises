// 4. Faça um programa que mostre todos os números primos de 0 a 100.
// 4. A program that displays all prime numbers from 0 to 100.

function isPrime(n) {
    let dividers = 0;
    for (let i=0; i<=n; i++) {
        if (n % i === 0) {
            dividers ++;
        }
    }
    if (dividers === 2) {
        return true;
    } else {
        return false;
    }
}

for(let i=1; i<=100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}



// Este código define uma função chamada isPrime() que recebe um número como seu argumento e retorna verdadeiro se o número é primo e falso se não for.
// O for loop verifica todos os possíveis divisores do número para determinar se ele é primo ou não. Se o número tiver exatamente dois divisores (1 e ele mesmo), então é primo.
// O segundo for loop usa a função isPrime() para verificar cada número de 1 a 100, e se um número for primo, ele é impresso no console usando console.log().


// This code defines a function called isPrime() that takes a number as its argument and returns true if the number is prime and false if it's not.
// The for loop checks all possible divisors of the number to determine if it's prime or not. If the number has exactly two divisors (1 and itself), then it's prime.
// The second for loop uses the isPrime() function to check each number from 1 to 100, and if a number is prime, it's printed to the console using console.log().
