const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// exercicio 1 - Crie uma função que retorna o dano do dragão. O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).
const dragonAttack = (dragon) => {
  const minDamage = 15;
  // const { strength } = dragon;
  const strength = dragon.strength;
  const dragonDamage = Math.floor((Math.random() * (strength - minDamage + 1) + minDamage)); // (50 - 15 + 1) + 15
  return dragonDamage;
}
console.log(dragonAttack(dragon));

// exercicio 2 - Crie uma função que retorna o dano causado pelo warrior.
const warriorAttack = (warrior) => {
  const weaponDmg = warrior.weaponDmg;
  const minDamage = warrior.strength;
  const maxDamage = minDamage * weaponDmg;
  // console.log(maxDamage);
  const warriorDamage = Math.floor((Math.random() * (maxDamage - minDamage + 1)) + minDamage); // número aleatório * (60 - 30 + 1) + 30
  return warriorDamage;
}
console.log(warriorAttack(warrior));

// exercicio 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
const mageAttack = (mage) => {
  const mageMana = mage.mana; // 125
  const minDmg = mage.intelligence; // 45
  const maxDmg = minDmg * 2; // 90
  const turnStats = {
    manaSpent: 0,
    damageDealt: 'Not enough mana...',
  };

  if (mageMana > 15) {
    const mageDamage = Math.floor((Math.random() * (maxDmg - minDmg + 1)) + minDmg);
    turnStats.manaSpent = 15;
    turnStats.damageDealt = mageDamage;
    return turnStats;
  }
  return turnStats;
};
console.log(mageAttack(mage));

// simula o turno do personagem warrior, mage, dragon
const gameActions = {
  warriorTurn: (warriorAttack) => {
    const warriorDamage = warriorAttack(warrior);
    warrior.damage = warriorDamage;
    dragon.healthPoints -= warriorDamage;
  },
  mageTurn: (mageAttack) => {
    const mageTurnStats = mageAttack(mage);
    const mageDamage = mageTurnStats.damageDealt;
    const { manaSpent } = mageTurnStats;
    mage.damage = mageDamage;
    mage.mana -= manaSpent;
    dragon.healthPoints -= mageDamage;
  },
  dragonTurn: (dragonAttack) => {
    const dragonDamage = dragonAttack(dragon);
    mage.healthPoints -= dragonDamage;
    warrior.healthPoints -= dragonDamage;
    dragon.damage = dragonDamage;
  },
  turnResults: () => battleMembers,
};

gameActions.warriorTurn(warriorAttack);
gameActions.mageTurn(mageAttack);
gameActions.dragonTurn(dragonAttack);
console.log(gameActions.turnResults());

