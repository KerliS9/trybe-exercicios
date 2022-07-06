import UserModel from '../models/userModel';
import UserInterface from '../interfaces/userInterface';

export default { 
  getAll: (): Promise<UserInterface[]> => {
    return UserModel.getAll();
  },

  create: async (user: UserInterface): Promise<UserInterface> => {
    const { insertId } = await UserModel.create(user);
    user.id = insertId;
    return user;
  }
};