import * as functions from "firebase-functions";
import { authApp } from "./authentication";

export const services = functions.https.onRequest(authApp);

export const game = functions.https.onRequest((req, res) => {
  res.send("game");
});
