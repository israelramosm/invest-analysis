import express from 'express';

import base from './base';
import v1 from './v1';

const BASE_ROUTE = express.Router();
const V1_ROUTE = express.Router();

export default (app) => {
  base(app, '/api', BASE_ROUTE);
  v1(app, '/api/v1', V1_ROUTE);
};
