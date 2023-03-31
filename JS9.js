// 9. Faça um programa que receba a idade de dez pessoas e que calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.
// 9. A program that receives the age of ten people, calculates and displays the quantity of people aged 18 or older.

const input = prompt('enter ages separated by commas:', '10,5,23,18,31,50,13,2,80,42');
const values = input.split(',');
console.log('Ages', values);

let counter = 0;
for(let i=0; i<values.length; i++) {
    const age = parseInt(values[i]);
    if (age >= 18) {
        counter ++;
    }
}

console.log('Adults', counter);


// A primeira linha do código usa o prompt() para exibir uma mensagem de diálogo pedindo que o usuário insira as idades separadas por vírgula. O valor padrão é definido como "10,5,23,18,31,50,13,2,80,42".
// A segunda linha usa o split() para dividir a string de entrada em um array de strings, usando a vírgula como separador.
// O terceiro console.log() imprime as idades que foram digitadas na tela, usando a string "Idades" (Ages) como título.
// Em seguida, um for loop é usado para iterar sobre o array de strings e verificar se cada idade é maior ou igual a 18 anos. Se for, a variável counter é incrementada.
// A última instrução console.log() imprime o número de pessoas com 18 anos ou mais na tela, usando a string "Maiores de idade" (Adults) como título.

// The first line of the code uses the prompt() method to display a dialog message asking the user to enter ages separated by commas. The default value is set as "10,5,23,18,31,50,13,2,80,42".
// The second line uses the split() method to divide the input string into an array of strings, using a comma as a separator.
// The third console.log() prints the ages that were entered on the screen, using the string "Ages" as the title.
// Next, a for loop is used to iterate over the array of strings and check if each age is greater than or equal to 18. If it is, the counter variable is incremented.
// The last console.log() statement prints the number of people who are 18 years or older on the screen, using the string "Adults" as the title.