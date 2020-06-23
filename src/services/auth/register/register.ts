import {
  generateJwt,
  ActionHandler,
  HttpStatus,
  trimObjectString,
  HttpError,
} from '@utils';
import { LoginResponse } from '@utils/schema';
import bcrypt from 'bcrypt';
import { Router, Response } from 'express';

import { registerUser, RegisterUserArgs } from './gql';

const RegisterUserHandler = async (
  input: RegisterUserArgs,
): Promise<LoginResponse> | never => {
  const trimmedInput = trimObjectString<RegisterUserArgs>(input);
  const { password, ...restUser } = trimmedInput;
  const hashedPw = await bcrypt.hash(password, 10);

  const newId = await registerUser({
    password: hashedPw,
    ...restUser,
  });

  return {
    id: newId,
    accessToken: generateJwt(String(newId), 'user'),
  };
};

const post: ActionHandler<LoginResponse, RegisterUserArgs> = async (
  req,
  res,
): Promise<Response<LoginResponse>> => {
  const { input } = req.body;

  try {
    const result = await RegisterUserHandler(input);
    return res.json(result);
  } catch (e) {
    console.error(e.message);
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
};

export const route = '/register';
export const router = Router();

router
  .route(route)
  .get((_, res) => res.send('register'))
  .post(post);
