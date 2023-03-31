// 5. Faça um programa que mostre as tabuadas dos números de 1 a 10 usando laços de repetição.
// 5. A program that displays the multiplication tables of the numbers from 1 to 10 using loops.

for (let i=1; i<=10; i++) {
    console.log(`Multiplication table of ${i}`);
    for (let j=1; j<=10; j++) {
        const result = i * j;
        console.log(`${i} x ${j} = ${result}`);
    }
    console.log('');
}


// Este código usa dois loops for para exibir as tabuadas dos números de 1 a 10.
// O outer loop itera de 1 a 10 e imprime um cabeçalho indicando o número atual que está sendo exibido.
// O inner loop itera de 1 a 10 para cada número no loop externo e multiplica o número atual do loop externo pelo número atual do loop interno. 
// O resultado é então impresso no console no formato "i x j = resultado".
// A segunda console.log('') é usada para imprimir uma linha vazia depois que cada tabela é exibida, para melhor legibilidade.


// This code uses two for loops to display the multiplication tables of the numbers from 1 to 10.
// The outer loop iterates from 1 to 10 and prints a heading indicating the current number being displayed.
// The inner loop iterates from 1 to 10 for each number in the outer loop, and multiplies the current outer loop number by the current inner loop number. 
// The result is then printed to the console in the format "i x j = result".
// The second console.log('') statement is used to print an empty line after each table is displayed, for better readability.

