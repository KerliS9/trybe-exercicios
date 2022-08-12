import IFrame from '../../interfaces/frame';

const frameMock:IFrame = {
  material: 'Ouro',
  color: 'Daquele naipe'
};

const frameMockWithId:IFrame & { _id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Ouro',
  color: 'Daquele naipe'
};

const frameMockToChange:IFrame = {
  material: 'Prata',
  color: 'Daquele naipe'
};

const frameMockWithChangeId:IFrame & { _id:string } = {
  _id: '62cf1fc6498565d94eba52cd',
  material: 'Prata',
  color: 'Daquele naipe'
};

export { frameMock, frameMockWithId, frameMockWithChangeId, frameMockToChange };