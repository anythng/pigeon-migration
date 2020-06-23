import { execute, HttpError } from '@utils';
import { User } from '@utils/schema';

import errors from '../errors';

const QUERY = `
  query GetCredentials($identifier: String!) {
    user(where: {
      _or: [
        { username: { _eq: $identifier} },
        { email: { _eq: $identifier } },
      ]
    }) {
      id
      password
    }
  }
`;

type Credentials = Pick<User, 'id' | 'password'>;

interface Args {
  identifier: string;
}

interface Data {
  user: Credentials[];
}

export { Credentials, Args as LoginUserArgs, Data as LoginUserData };

export const getCredentials = async (
  identifier: string,
): Promise<Credentials> => {
  const data = await execute<Data, Args>(QUERY, { identifier });

  const { user } = data;

  if (user.length !== 1) {
    throw new HttpError(errors.INVALID_ID);
  }

  return user[0];
};
