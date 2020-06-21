import express from 'express';
import { authRouter } from './auth';

export const servicesApp = express();

servicesApp.use('/auth', authRouter);
