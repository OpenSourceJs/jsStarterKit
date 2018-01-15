'use strict';

import express from 'express';
import path from 'path';
import http from 'http';
import middleware from './middlewares/serverMiddleware.js';
import { clientErr, serverErr } from './middlewares/errors.js';

const server = express();
const app = http.createServer(server);

server.use(express.static(path.join(__dirname, '../client/dist')));
// hheh
//middleware
middleware(server);

// setup global handle errors
server.use(clientErr);
server.use(serverErr);

export default server;
