const n = 9;

let resultado = 100;
for (let i = 0; i <= n; i += 1) {
	resultado -= i;
}
console.log(resultado)

// exercício 1 - imprima na tela um quadrado feito de asteriscos de lado de tamanho n
let n = 5;
let line = '';
let item = '*';

for (i = 0; i < n; i += 1) { // não usa length, porque não é array
	line += item;
	}
for (i = 0; i < n; i += 1) {
console.log(line);
}
/* 
*****
*****
*****
*****
***** 
*/

//solução 2 - exercício 1
const n = 5;	
for (let i = 0; i < n; i += 1) {
	let num = '';
	for (let i1 = 0; i1 < n; i1 += 1) {
	num += '*';
  // console.log(num);
	}
console.log(num);
} 

// exercício 2 - imprima um triângulo com 5 asteriscos de base
const n = 5;
let linha = '';
let symbol = '*';

for (i = 0; i < n; i += 1) {
	linha += symbol;
  console.log(linha);
}
/* 
*
**
***
****
***** 
*/


// exercício 3 - Agora inverta o lado do triângulo
const n = 5;
let line = '';
let symbol = '*';
let space = n;
for (let lineI = 0; lineI < n; lineI += 1) {
	for (let columnI = 0; columnI <= n; columnI += 1) {
    if(columnI < space) {
      line = line + ' ';
    } else {
      line = line + symbol;
    }
	}
  console.log(line);
  line = '';
  space -= 1;
}
/*
    *
   **
  ***
 ****
*****
 */

// exercício 4 - faça uma pirâmide com n asteriscos de base
const n = 5;
let line = '';
let symbol = '*';
let midTrian = (n + 1) / 2; // define o meio do triângulo
let trianLeft = midTrian; // controla o lado esquerdo
let trianRight = midTrian; // controla o lado direito
for(let lineI = 0; lineI <= midTrian; lineI += 1) { // enquanto for menor igual ao meio
  for(let columnI = 0; columnI <= n; columnI += 1) { // enquanto for menor igual ao n
    if(columnI > trianLeft && columnI < trianRight) {
      line +=  symbol;
      // console.log (line)
    } else { 
      line = line + ' ';
    }
  }
  console.log(line);
  line = ' ';
  trianRight += 1; // a cada laço o controle do lado direito é acrescido em 1
  trianLeft -= 1
};
/*

  *  
 *** 
***** 
*/

// exercício 5 - Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar
const n = 7;
let symbol = '*';
let midTrian = (n + 1) / 2; // define o meio do triângulo
let trianLeft = midTrian; // controla o lado esquerdo
let trianRight = midTrian; // controla o lado direito
for(let lineI = 0; lineI <= midTrian; lineI += 1) { // enquanto for menor igual ao meio
  let line = '';
  for(let columnI = 1; columnI <= n; columnI += 1) { // enquanto for menor igual ao n
    if(columnI == trianLeft || columnI == trianRight || line == midTrian) {
      line +=  symbol;
    } else { 
      line = line + ' ';
    }
  }
  trianRight += 1; // a cada laço o controle do lado direito é acrescido em 1
  trianLeft -= 1
  console.log(line);
};
/* 
   *  
  * *  
 *   * 
*     *
      
*/