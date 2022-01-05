const newUser = (id, name, email) => {
  return {
    id: id,
    name: name,
    email: email,
  };
};
console.log(newUser(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

console.log('//---------------');
const newUser2 = (id, name, email) => {
  return {
    id,
    name,
    email,
  };
};
console.log(newUser2(54, 'isabella', 'isabella@email.com')); // { id: 54, name: 'isabella', email: 'isabella@email.com' }

console.log('//---------------');
// exercicio 1 - altere a função getPosition utilizando a property shorthand
const getPosition = (latitude, longitude) => ({
  latitude: latitude,
  longitude: longitude});
console.log(getPosition(-19.8157, -43.9542));

const getPosition2 = (latitude, longitude) => ({
  latitude,
  longitude,
});
console.log(getPosition2(-19.8157, -43.9542));
