import { generateJwt, ActionHandler, HttpStatus, execute } from '@utils';
import {
  User,
  LoginResponse,
  Mutation_RootLoginArgs as LoginArgs,
} from '@utils/schema';
import bcrypt from 'bcrypt';
import { Router, Response } from 'express';

export const router = Router();

const UNAUTHORIZED = HttpStatus.UNAUTHORIZED;

const CREDENTIALS_QUERY = `
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

interface GetCredentialsArgs {
  identifier: string;
}

interface GetCredentialsData {
  user: Credentials[];
}

type Credentials = Pick<User, 'id' | 'password'>;

const getCredentials = async (
  identifier: string,
): Promise<Credentials> | never => {
  const result: GetCredentialsData = await execute<
    GetCredentialsData,
    GetCredentialsArgs
  >(CREDENTIALS_QUERY, { identifier });
  const { user } = result;

  // TODO: Handle fetching error

  if (user.length !== 1) {
    throw new Error('Incorrect credentials');
  }

  return user[0];
};

const post: ActionHandler<LoginResponse, LoginArgs> = async (
  req,
  res,
): Promise<Response<LoginResponse>> => {
  const { identifier, password } = req.body.input;

  let creds: Credentials;

  try {
    creds = await getCredentials(identifier);
  } catch (e) {
    return res.status(UNAUTHORIZED).json({
      message: e.message,
    });
  }

  const isPasswordCorrect = await bcrypt.compare(password, creds.password);

  if (!isPasswordCorrect) {
    return res.status(UNAUTHORIZED).json({
      message: 'Incorrect password',
    });
  }

  return res.json({
    id: creds.id,
    accessToken: generateJwt(String(creds.id), 'user'),
  });
};

router
  .route('/login')
  .get((_, res) => res.send('login'))
  .post(post);
