 // 7. Escreva um programa que recebe um número inteiro e mostre os números pares e ímpares (separados), de 1 até esse inteiro.
 // 7. A program that receives an integer and displays the odd and even numbers (separately) from 1 up to that integer.

const value = window.prompt('Digite um número inteiro:', '10');

const evens = []; // pares
const odds = []; // ímpares

for(let i=1; i<=value; i++) {
    if (i % 2 === 0) {
        evens.push(i);
    } else {
        odds.push(i);
    }
}

console.log('Even numbers:', evens);
console.log('Odd numbers:', odds);

// A primeira linha do código usa o window.prompt() para exibir uma mensagem de diálogo pedindo que o usuário insira um número inteiro. O valor padrão é definido como 10.
// Duas variáveis vazias são criadas no início do código, uma para armazenar os números pares (evens) e outra para armazenar os números ímpares (odds).
// O for loop itera de 1 até o número digitado pelo usuário e, em cada iteração, verifica se o número atual é par ou ímpar. Se o número for par, ele é adicionado ao array evens usando o método push(). Se o número for ímpar, ele é adicionado ao array odds.
// As duas últimas console.log() imprimem os arrays evens e odds na tela, respectivamente, indicando os números pares e ímpares que foram encontrados.

// This code creates a program that prompts the user to enter an integer and displays the even and odd numbers separately on the screen.
// The first line of the code uses the window.prompt() method to display a dialog box asking the user to enter an integer. The default value is set to 10.
// Two empty variables are created at the beginning of the code, one to store even numbers (evens) and another to store odd numbers (odds).
// The for loop iterates from 1 to the user-input number, and for each iteration, it checks whether the current number is even or odd. If the number is even, it is added to the evens array using the push() method. If the number is odd, it is added to the odds array.
// The last two console.log() statements print the evens and odds arrays on the screen, respectively, indicating the even and odd numbers that were found.