import IModel from '../interfaces/IModel';
import { isValidObjectId, Model } from 'mongoose';
import { ErrorTypes } from '../errors/catalog';

abstract class MongoModel<T> implements IModel<T> {
  // atributos...
  protected _model:Model<T>;

  constructor(model:Model<T>) {
    this._model = model;
  }
  
  public async create(obj: T): Promise<T> {
    return this._model.create({ ...obj });
  }
  
  public async readOne(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.findOne({ _id });
  }
  
  public async read(): Promise<T[]> {
    return this._model.find();
  }
  
  public async destroy(_id: string): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.findByIdAndDelete({ _id });
  }

  public async update(_id: string, obj: Partial<T>): Promise<T | null> {
    if (!isValidObjectId(_id)) throw Error(ErrorTypes.InvalidMongoId);
    return this._model.findByIdAndUpdate(
      { _id }, // param de busca
      { ...obj }, // dado a ser alterado
      { new: true, // retorne dados atualizados
      runValidators: true}, // valida antes de atualizar
    );
    
  }
  // métodos...
}

export default MongoModel;

/* UserModel.find()                   // encontra todos os usuários
         .skip(100)                // pula os primeiros 100 registos
         .limit(10)                // limita a 10 itens
         .sort({firstName: 1}      // ordena firstName de forma ascendente
         .select({firstName: true} // seleciona firstName apenas
         .exec()                   // executa a busca
        .then(docs => {
            console.log(docs)
          })
        .catch(err => {
            console.error(err)
          }) */

// https://millo-l.github.io/Typescript-mongoose-methods-statics/
// https://medium.com/@agentwhs/complete-guide-for-typescript-for-mongoose-for-node-js-8cc0a7e470c1