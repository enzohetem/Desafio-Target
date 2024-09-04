// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne: 
// • O menor valor de faturamento ocorrido em um dia do mês; 
// • O maior valor de faturamento ocorrido em um dia do mês; 
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. 

// IMPORTANTE: 
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal; 
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média; 

const fs = require('fs');
const { json } = require('stream/consumers');

let jsonData
let acumulador = 0;

fs.readFile('./dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo JSON:', err);
        return;
    }
    try {
        // Lê o Json
        jsonData = JSON.parse(data);

        // Filtra os dias em que o valor é 0
        jsonData = jsonData.filter(diaDoMes => diaDoMes.valor !== 0);
        
        // Acumula o total
        jsonData.forEach(diaDoMes => {
            acumulador += diaDoMes.valor;
        });

        // Faz a media mensal
        let mediaMensal = acumulador / jsonData.length;

         // Encontra o dia com o menor faturamento
         let diaMenorFaturamento = jsonData.reduce((min, diaDoMes) => {
            return diaDoMes.valor < min.valor ? diaDoMes : min;
        });

        console.log(`O dia com o menor faturamento é o dia ${diaMenorFaturamento.dia} com o valor de ${diaMenorFaturamento.valor}`);


        // Encontra o dia com o maior faturamento
        let diaMaiorFaturamento = jsonData.reduce((max, diaDoMes) => {
            return diaDoMes.valor > max.valor ? diaDoMes : max;
        });

        console.log(`O dia com o maior faturamento é o dia ${diaMaiorFaturamento.dia} com o valor de ${diaMaiorFaturamento.valor}`);

        // Conta os dias com faturamento superior à média mensal
        let diasSuperiorMedia = jsonData.filter(diaDoMes => diaDoMes.valor > mediaMensal).length;

        console.log(`Número de dias com faturamento superior à média mensal: ${diasSuperiorMedia} dias.`);

    } catch (err) {
        console.error('Erro ao analisar o JSON:', err);
    }
});

