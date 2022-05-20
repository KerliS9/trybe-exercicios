const isValid = (firstName, middleName, lastName) => {
  /*   if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    if (middleName && typeof middleName !== 'string') return false; 
    return true */
    if (!firstName || typeof firstName !== 'string') return { message: 'First name é obrigatório'};
    if (!lastName || typeof lastName !== 'string') return { message: 'Last name é obrigatório'};
    if (middleName && typeof middleName !== 'string') return { message: 'Middle name deve ser no formato de texto'};
  
    return {};
  };

  module.exports = {
    isValid,
  }