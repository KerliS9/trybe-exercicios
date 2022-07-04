const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convert(value: number, fromUnit: string, toUnit: string): number {
    const fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
    const toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
    const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index

    return value * Math.pow(10, exponent);
}

console.log(convert(100, 'm', 'km'));
// value é o primeiro parâmetro que é um número
// fromUnit é o segundo parâmetro que é uma string
// toUnit é o terceiro parâmetro que é uma string

// : number depois dos parâmetros se refere ao retorno esperado da função, no caso um número