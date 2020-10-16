import request from 'supertest';
import bcrypt from 'bcryptjs';
import app from '../../config/server/app';

import factory from '../factories';

import truncate from '../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('shoud encrypt user password when new user created', async () => {
    const user = await factory.create('User', {
      password: '1234567',
    });

    const passwordCompare = await bcrypt.compare('1234567', user.password_hash);

    expect(passwordCompare).toBe(true);
  });

  it('should be able to register', async () => {
    const user = await factory.attrs('User');

    const response = await request(app).post('/users').send(user);

    expect(response.body).toHaveProperty('id');
  });

  it('should not be able to register with duplicated email', async () => {
    const user = await factory.attrs('User');

    await request(app).post('/users').send(user);

    const response = await request(app).post('/users').send(user);

    expect(response.status).toBe(400);
  });
});
