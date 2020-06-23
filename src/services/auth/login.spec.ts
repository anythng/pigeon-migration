import bcrypt from 'bcrypt';
import fetch from 'jest-fetch-mock';
import express, { Express } from 'express';
import request from 'supertest';

import { router } from './login';

describe('Login handler', (): void => {
  let app: Express;

  const input = {
    identifier: 'testuser1',
    password: 'password',
  };

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use(router);

    bcrypt.compare = jest.fn(async (s1, s2) => s1 === s2);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should return a LoginResponse given valid credentials', async () => {
    const data = { user: [{ id: 1, password: 'password' }] };
    fetch.mockResponseOnce(JSON.stringify({ data }));

    const res = await request(app).post('/login').send({ input });

    expect(res.body).toHaveProperty('accessToken');
    expect(res.body).toHaveProperty('id');
  });
});
