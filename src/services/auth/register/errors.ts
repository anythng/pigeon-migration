import { HttpErrorInfo, HttpStatus } from '@utils';

const errors: Record<string, HttpErrorInfo> = {
  CONFLICT_USERNAME: {
    status: HttpStatus.CONFLICT,
    message: 'Username already exists',
  },
  CONFLICT_EMAIL: {
    status: HttpStatus.CONFLICT,
    message: 'Email already in use',
  },
};

export default errors;
