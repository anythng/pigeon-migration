import { TestApp } from '@utils/testing';
import { Mutation_RootLoginArgs as LoginArgs } from '@utils/schema';
import bcrypt from 'bcrypt';
import fetch from 'jest-fetch-mock';

import errors from './errors';
import { LoginUserData } from './gql';
import { route, router } from './login';

describe('Login handler', (): void => {
  let app: TestApp;

  const input: LoginArgs = {
    identifier: 'testuser1',
    password: 'password',
  };

  beforeAll(() => {
    app = new TestApp(router, route);
    bcrypt.compare = jest.fn(async (s1, s2) => s1 === s2);
  });

  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should return LoginResponse given valid credentials', async () => {
    const data: LoginUserData = { user: [{ id: 1, password: 'password' }] };
    fetch.mockResponseOnce(JSON.stringify({ data }));

    const res = await app.post({ input });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('accessToken');
    expect(res.body).toHaveProperty('id');
  });

  it('should throw error given invalid credentials', async () => {
    const data: LoginUserData = { user: [] };
    fetch.mockResponseOnce(JSON.stringify({ data }));

    const res = await app.post({ input });

    const expected = errors.INVALID_ID;
    expect(res.status).toBe(expected.status);
    expect(res.body).toHaveProperty('message', expected.message);
  });

  it('should throw error given invalid password', async () => {
    const data: LoginUserData = {
      user: [{ id: 1, password: 'wrongpassword' }],
    };
    fetch.mockResponseOnce(JSON.stringify({ data }));

    const res = await app.post({ input });

    const expected = errors.INVALID_PW;
    expect(res.status).toBe(expected.status);
    expect(res.body).toHaveProperty('message', expected.message);
  });
});
