import { TestApp } from '@utils/testing';
import fetch from 'jest-fetch-mock';

import errors from './errors';
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

  it('should throw http.conflict given existing username', async () => {
    const gqlError = {
      errors: [
        {
          extensions: {
            path: '$.selectionSet.insert_user_one.args.object',
            code: 'constraint-violation',
          },
          message:
            'Uniqueness violation. duplicate key value violates unique constraint \
             "UQ_78a916df40e02a9deb1c4b75edb"',
        },
      ],
    };
    fetch.mockResponseOnce(JSON.stringify(gqlError));

    const res = await app.post({ input });

    const expected = errors.CONFLICT_USERNAME;
    expect(res.status).toBe(expected.status);
    expect(res.body).toHaveProperty('message', expected.message);
  });

  it('should throw http.conflict given existing username', async () => {
    const gqlError = {
      errors: [
        {
          extensions: {
            path: '$.selectionSet.insert_user_one.args.object',
            code: 'constraint-violation',
          },
          message:
            'Uniqueness violation. duplicate key value violates unique constraint \
             "UQ_e12875dfb3b1d92d7d7c5377e22"',
        },
      ],
    };
    fetch.mockResponseOnce(JSON.stringify(gqlError));

    const res = await app.post({ input });

    const expected = errors.CONFLICT_EMAIL;
    expect(res.status).toBe(expected.status);
    expect(res.body).toHaveProperty('message', expected.message);
  });
});
