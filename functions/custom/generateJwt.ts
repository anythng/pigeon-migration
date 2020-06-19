import { sign, SignOptions } from 'jsonwebtoken';

export const generateJwt = (
  sub: string,
  defaultRole: string,
  otherOptions?: SignOptions,
): string =>
  sign(
    // "admin": true,
    // "hasura": {
    //    "claims": {
    //       "x-hasura-allowed-roles": ["editor","user", "mod"],
    //       "x-hasura-default-role": "user",
    //       "x-hasura-user-id": "1234567890",
    //       "x-hasura-org-id": "123",
    //       "x-hasura-custom": "custom-value"
    //    }
    //  }
    {
      // FIXME: default iat is in the future
      iat: Math.round(new Date().getTime() / 1000) - 10,
      sub,
      'https://hasura.io/jwt/claims': {
        'x-hasura-allowed-roles': ['admin', 'user'],
        'x-hasura-default-role': defaultRole,
        'x-hasura-user-id': sub,
      },
      ...otherOptions,
    },
    // TODO: Move to env var
    'cbSgdqVO/e2pEkNzmN6ozFPMDpnZJrz2',
  );
