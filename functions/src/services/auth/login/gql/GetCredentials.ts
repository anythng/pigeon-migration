// import { execute } from '@utils';
import { execute } from '../../../../utils';

const QUERY = `
  query GetCredentials($identifier: String!) {
    user(where: {
      _or: [
        { username: { _eq: $identifier } },
        { email: { _eq: $identifier } },
      ]
    }) {
      id
      password
    }
  }
`;

interface Args {
  identifier: string;
}

interface Data {
  user: Credentials[];
}

interface Credentials {
  id: number;
  password: string;
}

export const getCredentials = async (identifier: string): Promise<Data> =>
  await execute<Data, Args>(QUERY, { identifier });
