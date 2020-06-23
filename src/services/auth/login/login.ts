import { generateJwt, ActionHandler, HttpError } from '@utils';
import {
  LoginResponse,
  Mutation_RootLoginArgs as LoginArgs,
} from '@utils/schema';
import bcrypt from 'bcrypt';
import { Router, Response } from 'express';

import { Credentials, getCredentials } from './gql';

export const router = Router();
export const route = '/login';

const post: ActionHandler<LoginResponse, LoginArgs> = async (
  req,
  res,
): Promise<Response<LoginResponse>> => {
  const { identifier, password } = req.body.input;

  let creds: Credentials;

  try {
    creds = await getCredentials(identifier);
  } catch (e) {
    if (e.name === HttpError.name) {
      const { status, message }: HttpError = e;
      return res.status(status).json({
        message,
      });
    }
    return res.status(404).json({ message: e.message });
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
  .route(route)
  .get((_, res) => res.send('login'))
  .post(post);
