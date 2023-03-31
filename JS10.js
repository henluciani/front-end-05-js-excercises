// 10. Escreva um programa que lê o tamanho do lado de um quadrado e imprime um quadrado daquele tamanho com asteriscos.
// 11. A program that reads the size of a square's sides and prints a square of that size using asterisks.

const input = prompt('Digite um número inteiro:', '5');

let result = '';
for(let i=1; i<=input; i++) {
    for(let j=1; j<=input; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);

// O primeiro for loop itera de 1 até o tamanho do lado digitado pelo usuário. Dentro deste loop, outro for loop é usado para adicionar asteriscos à string result a cada iteração. 
// O número de asteriscos adicionados em cada iteração é igual ao tamanho do lado.
// Após a adição de asteriscos para todas as linhas do quadrado, o caractere de nova linha é adicionado à string result usando o escape de linha ('\n'). 
// Isso permite que os asteriscos sejam exibidos em linhas separadas.
// Finalmente, a string result é impressa no console usando console.log(). O resultado é um quadrado com asteriscos do tamanho especificado pelo usuário.

// The first for loop iterates from 1 up to the length of the square's side entered by the user. Within this loop, another for loop is used to add asterisks to the result string at each iteration. 
// The number of asterisks added in each iteration is equal to the side length.
// After adding asterisks for all the rows of the square, the newline character is added to the result string using the newline escape sequence ('\n'). 
// This allows the asterisks to be displayed on separate lines.
// Finally, the result string is printed to the console using console.log(). The output is a square with asterisks of the size specified by the user.