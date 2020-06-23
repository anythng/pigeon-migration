import { TestApp } from '@utils/testing';
import fetch from 'jest-fetch-mock';

import { RegisterUserData, RegisterUserArgs } from './gql';
import { route, router } from './register';

describe('Register handler', (): void => {
  let app: TestApp;

  const input: RegisterUserArgs = {
    username: 'testuser1',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email@email.com',
  };

  beforeAll(() => {
    app = new TestApp(router, route);
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

    const res = await app.post({ input });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('accessToken');
    expect(res.body).toHaveProperty('id');
  });

  // it('should ')
});
