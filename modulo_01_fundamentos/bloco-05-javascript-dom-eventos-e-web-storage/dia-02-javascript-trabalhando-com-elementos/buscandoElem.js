// arquivo script.js

console.log(document.getElementById('start').nextSibling) // nó

console.log(document.getElementById('start').nextElementSibling) // <p>elemento</p>

// exercício 1 - Acesse o elemento elementoOndeVoceEsta .
const whereIAm = document.getElementById('elementoOndeVoceEsta');

// exercício 2 - Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
const father = whereIAm.parentElement;
console.log(father);
father.style.color = 'red';

// exercício 3 - Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
const sonOfSon = whereIAm.firstElementChild;
sonOfSon.innerText = 'Section son of son';

// exercício 4 - Acesse o primeiroFilho a partir de pai 
const firstChild = father.firstElementChild;
console.log(firstChild);

// exercício 5 - Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta
const firstChild2 = whereIAm.previousElementSibling;
console.log(firstChild2);

// exercício 6 - Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta
const text = whereIAm.nextSibling;
console.log(text);

// exercício 7 - Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta
const thirdChild = whereIAm.nextElementSibling;
console.log(thirdChild);

// exercício 8 - Agora acesse o terceiroFilho a partir de pai
const thirdChild2 = father.children[2];
console.log(thirdChild2);

// CRIANDO ELEMENTOS
// exercício 1 - Crie um irmão para elementoOndeVoceEsta
const brother = document.createElement('section');
father.appendChild(brother);
brother.innerText = 'brother';
console.log(brother)

// exercício 2 - Crie um filho para elementoOndeVoceEsta
const son = document.createElement('section');
whereIAm.appendChild(son);
son.innerText = 'son';
console.log(son);

// exercício 3 - Crie um filho para primeiroFilhoDoFilho
const son2 = document.createElement('section');
sonOfSon.appendChild(son2);
son2.id = 'son2';

// exercício 4 - A partir desse filho criado, acesse terceiroFilho
console.log(son2.parentElement.parentElement.nextElementSibling)

// REMOVENDO ELEMENTOS
// Remova todos os elementos filhos de paiDoPai exceto pai , elementoOndeVoceEsta e primeiroFilhoDoFilho
for(let i = father.childNodes.length - 1; i >= 0; i -= 1) {
  const currentChild = father.childNodes[i];
  currentChild.remove()
}