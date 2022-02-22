const Redux = require('redux');

// const store = Redux.createStore(); // o ideal é criar a store num arquivo separado

/* const reducer = (state) => { // sem valores, retorna undefined
  return state;
  };
  
const store = Redux.createStore(reducer); */

/* const reducer = (state = { login: false, email: "" }) => { // o estado é setado numa variável para facilitar a manipulação dos dados.
  return state;
  };
  
  const store = Redux.createStore(reducer); */

/* const ESTADO_INICIAL = {
  login: false,
  email: "",
  };
  
  const reducer = (state = ESTADO_INICIAL) => {
  return state;
  };
  
  const store = Redux.createStore(reducer);

  console.log(store.getState()); */ // { login: false, email: '' }

  const fazerLogin = (email) => ({ // actionCreator com o nome fazerLogin. |Toda action precisa de pelo menos uma propriedade type, que irá comunicar ao Reducer a mudança a ser feita na store
    type: "LOGIN",
    email});
  
  const ESTADO_INICIAL = {
    login: false,
    email: "",
  };
  
  const reducer = (state = ESTADO_INICIAL, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...state,
          login: !state.login, // o inverso do que está setado inicialmente
          email: action.email, // irá receber o parâmetro definido na função, que irá atualizar a store na linha da função store.dispatch()
        };
      default: // No switch, sempre precisamos ter um caso default!
        return state;
    }
  };
  
  const store = Redux.createStore(reducer);
  
  store.dispatch(fazerLogin("alguem@email.com"));
  
  console.log(store.getState()); // { login: true, email: 'alguem@email.com' }