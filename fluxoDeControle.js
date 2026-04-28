// --- EXERCÍCIOS BÁSICOS (1 a 15) ---
function executarExercicio1() {
    alert("Executando Exercício 1: Verificar se é positivo");
    let numero = prompt("Digite um numero:");
    if(numero > 0) alert("Positivo");
    else if(numero < 0) alert("Negativo");
    else alert("Zero");
}
function executarExercicio2() {
    alert("Executando Exercício 2: Verificar se é par ou ímpar");
    let numero = prompt("Digite um numero:");
    if(numero % 2 === 0) alert("Par");
    else alert("Ímpar");
}
function executarExercicio3() {
    alert("Executando Exercício 3: 'Bom dia', 'Boa tarde' ou 'Boa noite'.");
    let periodo = prompt("Digite o período (M, T ou N):");
    if(periodo === "M") alert("Bom dia");
    else if(periodo === "T") alert("Boa tarde");
    else alert("Boa noite");
}
function executarExercicio4() {
    alert("Executando Exercício 4: Peça dois números e exiba o maior usando if");
    let numero1 = parseFloat(prompt("Digite o primeiro número:"));
    let numero2 = parseFloat(prompt("Digite o segundo número:"));
    if(numero1 > numero2) alert("O maior número é: " + numero1);
    else if(numero2 > numero1) alert("O maior número é: " + numero2);
    else alert("Os números são iguais.");
}
function executarExercicio5() {
    alert("Executando Exercício 5: Dado um número, para exibir 'Positivo' ou 'Negativo'.");
    let numero = parseFloat(prompt("Digite um número:"));
    let resultado = numero > 0 ? "Positivo" : "Negativo";
    alert(`O número é: ${resultado}`);
}
function executarExercicio6() {
    alert("Executando Exercício 6: Menu com 3 opções.");
    let opcao = prompt("Digite a opção (1, 2 ou 3):");
    switch(opcao) {
        case "1":
            alert("Início");
            break;
        case "2":
            alert("Sobre");
            break;
        case "3":
            alert("Sair");
            break;
        default:
            alert("Opção inválida");
    }
}
function executarExercicio7() {
    alert("Executando Exercício 7: 1 a 5..");
    let i = 1;
    while (i <= 5) {
        alert(`Contagem: ${i}`);
        i++;
    }
}
function executarExercicio8() {
    alert("Executando Exercício 8: contagem de 5 a 1.");
    let i = 5;
    do {
        alert(`Contagem: ${i}`);
        i--;
    } while (i >= 1);
}
function executarExercicio9() {
    alert("Executando Exercício 9: exibir os números de 1 a 10.");
    for (let i = 1; i <= 10; i++) {
        alert(`Contagem: ${i}`);
    }
}
function executarExercicio10() {
    alert("Executando Exercício 10: somar os números de 1 a 10 e exibir o resultado.");
    let soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += i;
    }
    alert(`A soma dos números de 1 a 10 é: ${soma}`);
}
function executarExercicio11() {
    alert("Executando Exercício 11: imprimir seus elementos de 1 a 10.");
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let i = 0; i < numeros.length; i++) {
        alert(`Elemento: ${numeros[i]}`);
    }
}
function executarExercicio12() {
    alert("Executando Exercício 12:exibir nomes de um array de nomes.");
    let nomes = ["Chris", "William", "Livia", "Isabela", "João", "Vinicius"];
    for (let nome of nomes) {
        alert(`Nome: ${nome}`);
    }
}
function executarExercicio13() {
    alert("Executando Exercício 13: objeto com 3 propriedades para listá-las.");
    let pessoa = {
        nome: "Chris",
        idade: 25,
        cidade: "São Paulo"
    };
    for (let propriedade in pessoa) {
        alert(`${propriedade}: ${pessoa[propriedade]}`);
    }
}
function executarExercicio14() {
    alert("Executando Exercício 14: Conte de 1 a 10, mas pare ao chegar no número 5.");
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            break;
        }
        alert(`Contagem: ${i}`);
    }
}
function executarExercicio15() {
    alert("Executando Exercício 15: Conte de 1 a 10, mas pulando o número 7");
    for (let i = 1; i <= 10; i++) {
        if (i === 7) {
            continue;
        }
        alert(`Contagem: ${i}`);
    }
}




// ... repita para os outros ...

// --- EXERCÍCIOS MÉDIOS (16 a 18) ---
function executarExercicio16() {
    alert("Exercício Médio 16: Verificar notas");
    let nota = parseFloat(prompt("Digite a nota (0 a 10):"));
    if (nota < 6) {
        alert("Reprovado");
    } else if (nota < 8) {
        alert("Recuperação");
    } else {
        alert("Aprovado");
    }
    
}
function executarExercicio17() {
    alert("Exercício Médio 17: de um número e tenha sua tabuada de 1 a 10");
    let numero = parseFloat(prompt("Digite um número:"));
    for (let i = 1; i <= 10; i++) {
        alert(`${numero} x ${i} = ${numero * i}`);
    }
}
function executarExercicio18() {
    alert("Exercício Médio 18: quantos elementos são do tipo number em um array com vários tipos.");
    let array = [1, "boa noite bruno", 2, true, 3];
    let count = 0;
    for (let elemento of array) {
        if (typeof elemento === "number") {
            count++;
        }
    }
    alert(`Quantidade de elementos do tipo number: ${count}`);
}



// --- EXERCÍCIOS DIFÍCEIS (19 e 20) ---
function executarExercicio19() {
    alert("Exercício 19: Peça uma palavra e verifique se ela é igual de trás pra frente (palíndromo).");
    let palavra = prompt("Digite uma palavra:");
    let palavraInvertida = palavra.split("").reverse().join("");
    if (palavra === palavraInvertida) {
        alert("A palavra é um palíndromo.");
    } else {
        alert("A palavra não é um palíndromo.");
    }
}

function executarExercicio20() {
    alert("Exercício 20: menu de opções que só encerra quando a opção 'Sair' for escolhida.");
    let opcao;
    while (opcao !== "Sair") {
        opcao = prompt("Escolha uma opção (Início, Sobre, Sair):");
        switch (opcao) {
            case "inicio":
                alert("Início");
                break;
            case "sobre":
                alert("Sobre");
                break;
            case "sair":
                alert("Saindo...");
                break;
            default:
                alert("Opção inválida");
        }
    }
}