import express, { Express } from 'express';
import fetch from 'jest-fetch-mock';
import request from 'supertest';

import { RegisterUserData, RegisterUserArgs } from './gql';
import { router } from './register';

describe('Register handler', (): void => {
  let app: Express;

  const input: RegisterUserArgs = {
    username: 'testuser1',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email@email.com',
  };

  beforeAll(() => {
    app = express();
    app.use(express.json());
    app.use(router);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should return a LoginResponse given valid credentials', async () => {
    const data: RegisterUserData = {
      insert_user_one: {
        id: 1,
      },
    };
    fetch.mockResponseOnce(JSON.stringify({ data }));

    const res = await request(app).post('/register').send({
      input,
    });

    expect(res.body).toHaveProperty('accessToken');
    expect(res.body).toHaveProperty('id');
  });
});
