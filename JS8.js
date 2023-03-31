// 8. Faça um programa que receba 5 idades, calcule e mostre a média das idades digitadas.
// 8. A program that receives 5 ages, calculates and displays their average.

const input = prompt('Digite idades separadas por vírgula:', '10,5,23,18,31');
const values = input.split(',');
console.log('Idades', values);

let total = 0;
for(let i=0; i<values.length; i++) {
    total += parseInt(values[i]);
}

const media = total / values.length;
console.log('Média', media);


// A primeira linha do código usa o prompt() para exibir uma mensagem de diálogo pedindo que o usuário insira as idades separadas por vírgula. O valor padrão é definido como "10,5,23,18,31".
// A segunda linha usa o split() para dividir a string de entrada em um array de strings, usando a vírgula como separador.
// O terceiro console.log() imprime as idades que foram digitadas na tela, usando a string "Idades" como título.
// Em seguida, um for loop é usado para iterar sobre o array de strings e somar os valores convertidos em números usando a função parseInt(). 
// O resultado é armazenado na variável "total".
// A média é então calculada dividindo o total pelo número de idades digitadas e armazenada na variável media.
// A última instrução console.log() imprime a média das idades na tela, usando a string "Média" como título.

// The first line of the code uses the prompt() to display a dialog box asking the user to enter ages separated by commas. The default value is set to "10,5,23,18,31".
// The second line uses the split() to split the input string into an array of strings, using the comma as a separator.
// The third console.log() prints the entered ages on the screen, using the string "Idades" as the title.
// Next, a for loop is used to iterate over the string array and add the values converted to numbers using the parseInt() function. The result is stored in the variable total.
// The average is then calculated by dividing the total by the number of ages entered and stored in the variable media.
// The last console.log() statement prints the average of the ages on the screen, using the string "Média" as the title.