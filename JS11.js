// 11. Escreva um programa que recebe a altura de um triangulo em um número inteiro e imprima-o utilizando asteriscos.
// 11. A program that receives the height of a triangle as an integer and prints it using asterisks.

const input = prompt('Digite um número inteiro:', '5');

let result = '';
for(let i=1; i<=input; i++) {
    for(let j=1; j<=i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);

// A primeira linha do código usa o prompt() para exibir uma mensagem de diálogo pedindo que o usuário insira um número inteiro. O valor padrão é definido como "5".
// Em seguida, dois for loops são usados para construir o triângulo de asteriscos. O primeiro itera de 1 até o número digitado pelo usuário e é responsável por construir cada linha do triângulo.
// Dentro desse loop, o outro for loop é usado para adicionar asteriscos à string result a cada iteração. O número de asteriscos adicionados em cada iteração é igual ao número da linha atual, representado pela variável i.
// Após a adição de asteriscos para cada linha do triângulo, o caractere de nova linha é adicionado à string result usando o escape de linha ('\n'). 
// Isso permite que cada asterisco seja exibido em linhas separadas.
// Finalmente, a string result é impressa no console usando console.log(). O resultado é um triângulo com asteriscos do tamanho especificado pelo usuário.

// The code prompts the user to enter an integer, which is then stored in the variable input. The variable result is initialized as an empty string.
// A for loop is used to iterate from 1 up to the input value. Within this loop, another for loop is used to add asterisks to the result string. 
// The number of asterisks added on each iteration of the inner loop is equal to the value of the outer loop.
// After adding the asterisks for each row of the triangle, the newline character \n is added to the result string. 
// This ensures that the asterisks are displayed on separate lines.
// Finally, the result string is printed to the console using console.log(). The result is a triangle made of asterisks with the height specified by the user.