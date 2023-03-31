// 6. Faça um programa que recebe um número inteiro e mostre a tabuada desse número.
// 6. A program that receives an integer and displays the multiplication table of that number.

const target = window.prompt('Digite um número inteiro:', '5');

console.log(`Multiplication table of ${target}`);
for (let i=1; i<=10; i++) {
    const result = target * i;
    console.log(`${target} x ${i} = ${result}`);
}

// Este código cria um programa que recebe um número inteiro do usuário e exibe a tabuada desse número na tela.
// A primeira linha do código usa o window.prompt() para exibir uma mensagem de diálogo pedindo que o usuário insira um número inteiro. O valor padrão é definido como 5.
// O segundo console.log() imprime um cabeçalho indicando a tabuada do número digitado.
// O for loop itera de 1 a 10 e, em cada iteração, multiplica o número digitado pelo número atual do loop e armazena o resultado em uma variável. 
// O resultado é então impresso no console no formato "número digitado x i = resultado".

// This code creates a program that prompts the user to enter an integer and displays its multiplication table on the screen.
// The first line of code uses the window.prompt() method to display a dialog box asking the user to enter an integer. The default value is set to 5.
// The second console.log() statement prints a heading indicating the multiplication table of the entered number.
// The for loop iterates from 1 to 10, and for each iteration, it multiplies the entered number by the current loop number and stores the result in a variable. 
// The result is then printed to the console in the format "entered number x i = result".
