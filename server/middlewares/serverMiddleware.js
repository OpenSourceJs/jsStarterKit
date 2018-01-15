'use strict';

import cors from 'cors';
import logger from 'morgan';
import helmet from 'helmet';
import expressSession from 'express-session';
import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import expressValidator from 'express-validator';

export default server => {
  server.use(
    cors({
      allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'token_authorization'
      ]
    })
  );
  server.use(helmet());
  server.use(logger('combined'));
  server.use(compression());
  server.use(cookieParser());
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(expressValidator());
  server.use(
    expressSession({ secret: 'max', resave: false, saveUninitialized: false })
  );
};
