import { generateJwt, ActionHandler, query, user } from '@utils';
import bcrypt from 'bcrypt';
import { Router, Response } from 'express';

import { LoginResponse } from './types';

export const router = Router();

interface LoginArgs {
  identifier: string;
  password: string;
}

const getCredentials = async (identifier: string): Promise<user> | never => {
  const users = await query.user({
    where: {
      _or: [
        {
          username: { _eq: identifier },
        },
        {
          email: { _eq: identifier },
        },
      ],
    },
  });

  // TODO: Handle fetching error

  if (users.length === 0) {
    throw new Error('Incorrect credentials');
  }

  return users[0];
};

const post: ActionHandler<LoginResponse, LoginArgs> = async (
  req,
  res,
): Promise<Response<LoginResponse>> => {
  const { identifier, password }: LoginArgs = req.body.input;

  let creds: user;

  try {
    creds = await getCredentials(identifier);
  } catch (e) {
    return res.status(401).json({
      message: e.message,
    });
  }

  const isPasswordCorrect = await bcrypt.compare(password, creds.password);

  if (!isPasswordCorrect) {
    return res.status(401).json({
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
