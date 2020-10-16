import { Router } from 'express';

import User from './User';

class Routes {
  constructor() {
    this.route = new Router();

    this.user('/users');
  }

  user(baseRoute) {
    this.route.post(`${baseRoute}`, User.store);
  }
}

export default new Routes().route;
