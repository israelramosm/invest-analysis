import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
// TODO: store session on mongo
// import session from "express-session"
// import mongo from "connect-mongo"
import { connect } from 'mongoose';

import apiRoutes from './routes';
import { SERVER } from './util/Constants';

// importing enviroment variables from .env
dotenv.config();

// eslint-disable-next-line object-curly-newline
const { PORT, DB, DB_HOST, DB_NAME, DB_USER, DB_PASS } = process.env;
// mongodb://expressjs:password@localhost/expressdb
const DB_URI = `${DB}${DB_USER}:${DB_PASS}@${DB_HOST}${DB_NAME}`;

const DIST_DIR = path.join(__dirname, '/build');
const app = express();

/* Configuration */
// Static Files
app.use(express.static(DIST_DIR));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* API */
apiRoutes(app);

// needs to be after the api routes
app.get('*', (req, res) => {
  res
    .status(404)
    .send({ message: "We couldn't find what you were looking for" });
});

// DB Connection
connect(DB_URI, { useNewUrlParser: true })
  .then(() => {
    // eslint-disable-next-line no-console
    console.log(SERVER, 'DB connection open');
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(SERVER, `Listen on ${PORT}`);
    });
  })
  // eslint-disable-next-line prettier/prettier
  .catch((error) => console.error(SERVER, `*** DB Connection Error: ${error} ***`));
