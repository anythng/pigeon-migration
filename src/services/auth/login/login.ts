import { generateJwt, ActionHandler, HttpStatus } from '@utils';
import {
  LoginResponse,
  Mutation_RootLoginArgs as LoginArgs,
} from '@utils/schema';
import bcrypt from 'bcrypt';
import { Router, Response } from 'express';

import { Credentials, getCredentials } from './gql';

export const router = Router();

const UNAUTHORIZED = HttpStatus.UNAUTHORIZED;

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
