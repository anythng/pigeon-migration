import { execute, ExecuteError, HttpError } from '@utils';
import { Mutation_RootRegisterUserArgs as Args } from '@utils/schema';

import errors from '../errors';

const QUERY = `
  mutation RegisterUser(
    $username: String!
    $password: String!
    $firstName: String!
    $lastName: String!
    $email: String!
  ) {
    insert_user_one(object: {
      username: $username
      password: $password
      first_name: $firstName
      last_name: $lastName
      email: $email
    }) {
      id
    }
  }
`;

export { Args };

export interface Data {
  insert_user_one: {
    id: number;
  };
}

export { Args as RegisterUserArgs, Data as RegisterUserData };

const USERNAME_CONSTRAINT = 'UQ_78a916df40e02a9deb1c4b75edb';

export const registerUser = async (newUser: Args): Promise<number> | never => {
  try {
    const data = await execute<Data, Args>(QUERY, newUser);
    return data.insert_user_one.id;
  } catch (e) {
    switch (e.name) {
      case ExecuteError.name: {
        const executeError: ExecuteError = e;
        const offendingError = executeError.errors[0];

        if (offendingError.message.includes(USERNAME_CONSTRAINT)) {
          throw new HttpError(errors.CONFLICT_USERNAME);
        }

        throw e;
      }
      default:
        throw e;
    }
  }
};
