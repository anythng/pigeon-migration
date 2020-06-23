import express, { Router } from 'express';
import request from 'supertest';

type Body = string | Record<string, unknown>;

export class TestApp {
  route: string;
  app = express();

  constructor(router: Router, route: string) {
    this.app.use(express.json());
    this.app.use(router);
    this.route = route;
  }

  async get(body?: Body): Promise<request.Response> {
    return await request(this.app).get(this.route).send(body);
  }

  async post(body?: Body): Promise<request.Response> {
    return await request(this.app).post(this.route).send(body);
  }
}
