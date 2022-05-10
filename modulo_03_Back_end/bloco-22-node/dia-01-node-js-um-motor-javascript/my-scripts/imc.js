/* const weight = 60;
const height = 1.70;

const IMC = (weight/(height*height));
console.log(IMC);
 */
const readlineSync = require('readline-sync');

// const nome = readlineSync.question('Qual é o seu nome?');
// const peso = readlineSync.questionFloat('Qual é o seu peso?');
// const altura = readlineSync.questionInt('Qual a sua altura? (em metros)');

// console.log(`Olá, ${nome}! Você tem ${peso} Kg e ${altura} metros de altura`);

function calcularImc(weight, height) {
    const altMetros = height / 100;
    const nAltura = altMetros * altMetros;
    console.log(nAltura.toFixed(4));
    const IMC = (weight/nAltura);
    return IMC.toFixed(2);
}

function imcReadline() {
    const peso = readlineSync.questionFloat('Qual é o seu peso?');
    const altura = readlineSync.questionInt('Qual a sua altura? (em centímetros)');
    const IMCVariable = calcularImc(peso, altura)
    if (IMCVariable < 18.5) return console.log(`Seu IMC está como abaixo do peso, no valor de ${IMCVariable}`);
    else if (IMCVariable >= 18.5 && IMCVariable <= 24.9) return console.log(`Seu IMC está como peso normal, no valor de ${IMCVariable}`);
    else if (IMCVariable > 24.9 && IMCVariable <= 29.9) return console.log(`Seu IMC está como acima do peso (sobrepeso), no valor de ${IMCVariable}`);
    else if (IMCVariable > 29.9 && IMCVariable <= 34.9) return console.log(`Seu IMC está como Obesidade grau I, no valor de ${IMCVariable}`);
    else if (IMCVariable > 34.9 && IMCVariable <= 39.9) return console.log(`Seu IMC está como Obesidade grau II, no valor de ${IMCVariable}`);
    return console.log(`Seu IMC está como Obesidade graus III e IV, no valor de ${IMCVariable}`);
    // console.log(`Olá, seu IMC é de ${IMCVariable}`);
}

imcReadline();