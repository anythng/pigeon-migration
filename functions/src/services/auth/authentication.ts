import bcrypt from 'bcrypt';
import { Router } from 'express';

import { execute, generateJwt } from '@utils';

export const router = Router();

interface loginArgs {
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

router
  .route('/login')
  .post(async (req, res) => {
    const { identifier, password }: loginArgs = req.body.input;

    const result: GetCredentialsData = await execute<GetCredentialsArgs>(
      CREDENTIALS_QUERY,
      { identifier },
    );
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
  })
  .get((req, res) => res.send('login'));
