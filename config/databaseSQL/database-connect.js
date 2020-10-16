import Sequelize from 'sequelize';
import databaseConfig from './database-config';

import User from '../../src/models/User';

const models = [User];

class DatabaseSQL {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new DatabaseSQL();
