import { database } from '../../database';
import { User } from '../../interfaces/User';

export default {
  userFindModel: async (id: string) => {
    return database().get('user').find({ id }).value();
  },
  joinUserModel: async (data: User) => {
    return database().get('user').push(data).write();
  },
  userListModel: async () => {
    return database().get('user').value();
  },
};
