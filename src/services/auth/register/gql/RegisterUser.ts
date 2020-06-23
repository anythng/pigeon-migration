import { execute } from '@utils';
import { Mutation_RootRegisterUserArgs as Args } from '@utils/schema';

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

export const registerUser = async (newUser: Args): Promise<number> | never => {
  const data = await execute<Data, Args>(QUERY, newUser);

  return data.insert_user_one.id;
};
