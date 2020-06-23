import { generateJwt, ActionHandler, HttpError, HttpStatus } from '@utils';
import {
  LoginResponse,
  Mutation_RootLoginArgs as LoginArgs,
} from '@utils/schema';
import bcrypt from 'bcrypt';
import { Router, Response } from 'express';

import errors from './errors';
import { Credentials, getCredentials } from './gql';

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
    return res
      .status(HttpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: e.message });
  }

  const isPasswordCorrect = await bcrypt.compare(password, creds.password);

  if (!isPasswordCorrect) {
    const { message, status } = errors.INVALID_PW;
    return res.status(status).json({
      message,
    });
  }

  return res.json({
    id: creds.id,
    accessToken: generateJwt(String(creds.id), 'user'),
  });
};

export const router = Router();
export const route = '/login';

router
  .route(route)
  .get((_, res) => res.send('login'))
  .post(post);
