import { HttpErrorInfo, HttpStatus } from '@utils';

const errors: Record<'INVALID_ID' | 'INVALID_PW', HttpErrorInfo> = {
  INVALID_ID: {
    status: HttpStatus.UNAUTHORIZED,
    message: 'Invalid Username/Email',
  },
  INVALID_PW: { status: HttpStatus.UNAUTHORIZED, message: 'Invalid Password' },
};

export default errors;
