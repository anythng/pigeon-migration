import { execute, generateJwt, ActionHandler } from '@utils';
import bcrypt from 'bcrypt';
import { Router, Response } from 'express';

import { LoginResponse } from './types';

export const router = Router();

interface LoginArgs {
  identifier: string;
  password: string;
}

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

interface Credentials {
  id: number;
  password: string;
}

const post: ActionHandler<LoginResponse, LoginArgs> = async (
  req,
  res,
): Promise<Response<LoginResponse>> => {
  const { identifier, password }: LoginArgs = req.body.input;

  const result: GetCredentialsData = await execute<
    GetCredentialsData,
    GetCredentialsArgs
  >(CREDENTIALS_QUERY, { identifier });
  const { user } = result;
  // TODO: Handle error

  if (user.length === 0) {
    return res.status(401).json({
      message: 'Incorrect credentials',
    });
  }

  const creds = user[0];

  const isPasswordCorrect = await bcrypt.compare(password, creds.password);

  if (!isPasswordCorrect) {
    return res.status(401).json({
      message: 'Incorrect password',
    });
  }

  return res.json({
    id: creds.id,
    // TODO: Change role
    accessToken: generateJwt(String(creds.id), 'user'),
  });
};

router
  .route('/login')
  .get((_, res) => res.send('login'))
  .post(post);
