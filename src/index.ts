// This has to be at the top
import './tsPaths';

import * as functions from 'firebase-functions';

import { servicesApp } from './services';

export const services = functions.https.onRequest(servicesApp);
