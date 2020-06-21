import * as functions from 'firebase-functions';

import { servicesApp } from './services';
import './tsPaths';

export const services = functions.https.onRequest(servicesApp);

export const game = functions.https.onRequest((req, res) => {
  res.send('game');
});
