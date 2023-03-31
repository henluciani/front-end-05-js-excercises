// 3. Faça um programa que recebe um número inteiro e mostre a contagem de 1 até ele.
// 3. A program that receives an integer and displays the numbers from 1 up to that integer.

const target = window.prompt('Digite um número inteiro:', '10');

for (let i=1; i<=target; i++) {
    console.log(i);
}

// Este código usa o window.prompt() para receber uma entrada de número inteiro do usuário. O método prompt() exibe uma caixa de diálogo com uma mensagem pedindo ao usuário que insira um valor inteiro. O valor padrão é definido como 10.
// O for loop é então usado para iterar pelos números de 1 até o valor do número inteiro de entrada. A declaração de inicialização do loop inicializa a variável de loop i para 1, e a condição do loop verifica se i é menor ou igual ao número inteiro de entrada.
// Durante cada iteração, a declaração do loop incrementa i em 1, e o método console.log() é chamado, o que imprime o valor atual de i no console.

// This code uses the window.prompt() method to receive an integer input from the user. The prompt() method displays a dialog box with a message asking the user to input an integer value. The default value is set to 10.
// The for loop is then used to iterate through the numbers from 1 up to the value of the input integer. The loop initialization statement initializes the loop variable i to 1, and the loop condition checks whether i is less than or equal to the input integer.
// During each iteration, the loop statement increments i by 1, and the console.log() method is called, which prints the current value of i to the console.