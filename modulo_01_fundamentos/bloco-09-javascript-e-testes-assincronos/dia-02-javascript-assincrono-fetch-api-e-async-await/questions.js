// O que é um código que é executado de modo assíncrono? Qual é a diferença disso para um código que é executado de modo síncrono?
// assíncrono é independente da execução de outros códigos
// síncrono, ocorre em ordem que foi definido/escrito

// Quando você tem que enfileirar várias callbacks , que problema surge?
// uma pode dar retorno no momento errado, e com isso dar bug no código

// Por que as Promises são uma forma de resolver esse problema?
// porque é possível ordenar o momento de chamada, fazendo uma assíncrona esperar pelo retorno da outra

// Quando você vai se comunicar com uma API , tal comunicação deve ser síncrona ou assíncrona?
// assíncrona, devido a possibilidade de demora para conexão e retorno ao request

// Dada a resposta anterior, o que é fetch e para que ele serve?
// fetch organiza as requests e response