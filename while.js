let num=0; // Criação da variável "num" e atribuição de valor a 0, para que quando o usuário digite um número, ele seja validado de maneira correta
do {
    num = parseInt(prompt("Por favor, digite um número")); // A variável "num" recebe um novo valor que seja inteiro, de acordo com aquilo que o usuário digitar
    if (isNaN(num) || num <= 0) {
        alert("Este número não é válido, digite novamente"); // Validação do número caso ele seja negativo ou não seja um número, a caixa de texto pede ao usuário para digitar novamente
    }
} while ( num <0 || isNaN(num) ); // Condição da ação analisa se ele é negativo ou não é um número
