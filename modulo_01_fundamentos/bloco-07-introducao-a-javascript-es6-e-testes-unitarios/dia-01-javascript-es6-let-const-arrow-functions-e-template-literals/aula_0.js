const myName = "Isabella"
console.log('Hello' + ' ' + myName + '!');

const myName = "Isabella"
console.log(`Welcome ${myName}!`);
/* A sintaxe do template literals pede para usarmos o sinal de crases no início e no final da frase, e variáveis dentro de um ${...} . Você também pode adicionar uma expressão dentro das chaves, como ${a + b} . */

// Com o template literals
console.log(`Primeira linha;
Segunda linha;
Terceira linha;`
)

// Sem o template literals:
console.log('Primeira linha;\n' + 'Segunda linha;\n' + 'Terceira linha;\n')

/* Outra novidade é poder adicionar quebras de linha com o template literals sem a necessidade de concatená-las com o operador + e \n para trocar de linha. */
