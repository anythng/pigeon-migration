import { generateJwt, ActionHandler, query, user, HttpStatus } from '@utils';
import bcrypt from 'bcrypt';
import { Router, Response } from 'express';

import { LoginResponse } from './types';

export const router = Router();

const UNAUTHORIZED = HttpStatus.UNAUTHORIZED;

interface LoginArgs {
  identifier: string;
  password: string;
}

const getCredentials = async (identifier: string): Promise<user> | never => {
  const users = query.user({
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

  if (users.length !== 1) {
    throw new Error('Incorrect credentials');
  }

  console.log(users);
  return users[0];
};

const post: ActionHandler<LoginResponse, LoginArgs> = async (
  req,
  res,
): Promise<Response<LoginResponse>> => {
  const { identifier, password } = req.body.input;
  console.log(identifier, password);

  let creds: user;

  try {
    creds = await getCredentials(identifier);
    console.log(creds);
  } catch (e) {
    return res.status(UNAUTHORIZED).json({
      message: e.message,
    });
  }

  console.log(password, creds.password);
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
