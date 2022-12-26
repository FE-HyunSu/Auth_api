import { User } from '../../interfaces/User';
import { UserModel } from '../../models';

const findUserService = async (id: string) => {
  const userFindData = await UserModel.userFindModel(id);
  return userFindData;
};

const joinUserService = async (data: User) => {
  const joinResult = await UserModel.joinUserModel(data);
  return joinResult.length;
};
const userListService = async () => {
  const listResult = await UserModel.userListModel();
  return listResult;
};
export default {
  findUserService,
  joinUserService,
  userListService,
};
