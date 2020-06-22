import { generateJwt, ActionHandler, HttpStatus } from '@utils';
import bcrypt from 'bcrypt';
import { Router, Response } from 'express';

import { registerUser, RegisterUserArgs } from './gql';
import { LoginResponse } from '../types';

const RegisterUserHandler = async (
  input: RegisterUserArgs,
): Promise<LoginResponse> | never => {
  const { password, ...restUser } = input;
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
    return res.status(HttpStatus.CONFLICT).json({
      message: e.message,
    });
  }
};

export const router = Router();

router
  .route('/register')
  .get((_, res) => res.send('register'))
  .post(post);
