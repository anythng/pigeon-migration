import { execute } from '@utils';

const QUERY = `
  mutation RegisterUser(
    $username: String
    $password: String
    $firstName: String
    $lastName: String
    $email: String
  ){
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

export interface RegisterUserArgs {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

interface Data {
  insert_user_one: {
    id: number;
  };
}

export const registerUser = async (
  newUser: RegisterUserArgs,
): Promise<number> | never => {
  const data = await execute<Data, RegisterUserArgs>(QUERY, newUser);

  if (data.errors) {
    throw new Error(JSON.stringify(data));
  }

  return data.insert_user_one.id;
};
