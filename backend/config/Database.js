import { Sequelize } from 'sequelize';

const db = new Sequelize('nodebird', 'root', '', {
  host: 'localhost',
  password: 'rlatpgus1!',
  dialect: 'mysql',
});

export default db;
