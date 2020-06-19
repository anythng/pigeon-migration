import express from 'express';
import { router as authenticationRoutes } from './auth/authentication';

export const servicesApp = express();

servicesApp.use('/auth', authenticationRoutes);
