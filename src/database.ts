import lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { User } from './interfaces/User';

type Schema = {
    user: User[];
};

let db: lowdb.LowdbSync<Schema>;
export const createConnection = async () => {
    const adapter = new FileSync<Schema>('db.json');
    db = lowdb(adapter);
    db.defaults({ user: []  }).write();
};

export const database = () => db;
