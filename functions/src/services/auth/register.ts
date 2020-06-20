import { execute, generateJwt, ActionHandler } from '@utils';
import bcrypt from 'bcrypt';
import { Router, Response } from 'express';

import { LoginResponse } from './types';

interface RegisterUserArgs {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

const REGISTER_USER = `
  mutation RegisterUser(
    $username: String
    $password: String
    $firstName: String
    $lastName: String
    $email: String
  ){
    insert_user_one(object: {
      username: $username
      password: $password
      first_name: $firstName
      last_name: $lastName
      email: $email
    }) {
      id
    }
  }
`;

interface RegisterUserData {
  insert_user_one: {
    id: number;
  };
}

const RegisterUserHandler = async (
  input: RegisterUserArgs,
): Promise<LoginResponse> | never => {
  const { password, ...restUser } = input;
  const hashedPw = await bcrypt.hash(password, 10);

  const data = await execute<RegisterUserData, RegisterUserArgs>(
    REGISTER_USER,
    {
      password: hashedPw,
      ...restUser,
    },
  );

  if (data.errors) {
    throw new Error(JSON.stringify(data));
  }

  const { id } = data.insert_user_one;
  return {
    id,
    accessToken: generateJwt(String(id), 'user'),
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
    return res.status(400).json({
      message: e.message,
    });
  }
};

export const router = Router();

router
  .route('/register')
  .get((_, res) => res.send('register'))
  .post(post);
