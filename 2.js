// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, 
// informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência. 

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código; 

let numero = 55;
let i = 0;
let i2 = 1;
let sequencia = [0, 1];

for (i; i < numero; i++) {
    let soma = sequencia[sequencia.length - 2] + sequencia[sequencia.length - 1];

    sequencia.push(soma);

    console.log(soma);
}

if (sequencia.find(elemento => elemento === numero)) {
    console.log(`O número ${numero} está na sequência de Fibonacci`);    
}else{
    console.log(`O número ${numero} não está na sequência de Fibonacci`);
}