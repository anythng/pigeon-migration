import { generateJwt, ActionHandler } from '@utils';
import bcrypt from 'bcrypt';
import { Router, Response } from 'express';

import { getCredentials } from './gql';
import { LoginResponse } from '../types';

export const router = Router();

interface LoginArgs {
  identifier: string;
  password: string;
}

const post: ActionHandler<LoginResponse, LoginArgs> = async (
  req,
  res,
): Promise<Response<LoginResponse>> => {
  const { identifier, password }: LoginArgs = req.body.input;

  const data = await getCredentials(identifier);

  const { user } = data;
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
