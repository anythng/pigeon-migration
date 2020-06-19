import * as functions from 'firebase-functions';

import './tsPaths';

import { servicesApp } from './services';

export const services = functions.https.onRequest(servicesApp);

export const game = functions.https.onRequest((req, res) => {
  res.send('game');
});
