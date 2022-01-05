// sem parâmetros
const greeting = (user) => console.log(`Welcome ${user}!`);
greeting(); // Welcome undefined!

console.log('//---------------');
// sem parâmetro, mas com operador ternário para considerar resultado undefined
const greeting2 = (user) => {
  const userDisplay = typeof user === 'undefined' ? 'usuário' : user;
  console.log(`Welcome ${userDisplay}!`);
};
greeting2(); // Welcome usuário!

console.log('//---------------');
// com parâmetro default
const greeting3 = (user = 'usuário') => console.log(`Welcome ${user}!`);
greeting3(); // // Welcome usuário!

console.log('//---------------');
// exercício 1 - escreva uma função multiply que multiplique dois números passados como argumentos. Atribua como default o valor 1 caso não seja passado nenhum valor como segundo parâmetro
const multiply = (number, value = 1) => {
  return number * value;
};
console.log(multiply(8));