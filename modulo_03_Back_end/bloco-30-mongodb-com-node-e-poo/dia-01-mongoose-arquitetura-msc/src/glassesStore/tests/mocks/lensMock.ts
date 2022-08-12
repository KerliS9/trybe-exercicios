import ILens from "../../interfaces/lens";

const lensMock:ILens = {
  degree: 1,
  antiGlare: true,
  blueLightFilter: true,
}

const lensMockWithId: ILens & { _id: string} = {
  _id: '62cf1fc6498565d94eba52c1',
  degree: 1,
  antiGlare: true,
  blueLightFilter: true,
}

export { lensMockWithId, lensMock };