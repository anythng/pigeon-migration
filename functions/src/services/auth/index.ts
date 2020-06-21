import { Router } from 'express';

import { router as loginRoute } from './login/login';
import { router as registerRoute } from './register';

export const authRouter = Router();

authRouter.use(loginRoute);
authRouter.use(registerRoute);
