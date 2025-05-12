let nota = 0; // Criação da variável "nota" e atribuição de valor a 0, para que quando o usuário digite um número, ele seja validado de maneira correta
let soma = 0;
let i = 0;
do {
    nota = parseFloat(prompt("Por favor, digite suas notas")); // A variável "nota" recebe um novo valor que seja real, de acordo com aquilo que o usuário digitar

    if (isNaN(nota) || nota <= 0 || nota > 10) {
        alert("Este número não é válido para notas, digite novamente"); // Validação do número caso ele seja menor que 0 e maior que 10 ou não seja um número, a caixa de texto pede ao usuário para digitar novamente
    } else {
        soma = soma + nota;
        i++;
    }
} while (nota > 0 || isNaN(nota)); // Condição da ação analisa se ele é menor que 0 ou não é um número
let media = (soma / i);
alert(`A média das notas é de: ${media}`);