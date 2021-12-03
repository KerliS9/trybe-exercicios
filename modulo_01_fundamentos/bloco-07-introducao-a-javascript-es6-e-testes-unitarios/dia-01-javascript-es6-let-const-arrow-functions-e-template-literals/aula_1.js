//função normal
const printName = function () {
  const myName = "Lucas";
  return myName;
}
console.log(printName());


//arrow functions devido a retirada do termo função e utilização do =>
const printName = () => {
  const myName = "Lucas";
  return myName;
}
console.log(printName());

const printName = () => "Lucas";
console.log(printName());

//parênteses podem ser omitidos quando tiver somente um parâmetro
const multiplyByTwo = number => number * 2;
console.log(multiplyByTwo(10));

//neste caso, tem dois parâmetros é necessário a colocação dos parênteses
const multiplication = (number, multi) => number * multi;
console.log(multiplication(8, 2));