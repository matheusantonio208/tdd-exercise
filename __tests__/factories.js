import { factory } from 'factory-girl';
import faker from 'faker';

import User from '../src/models/User';

factory.define('User', User, {
  name: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export default factory;
