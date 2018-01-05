'use strict';
import chalk from 'chalk';
import print from './libs/utils.js';
import server from './server/server.js';

const port = process.argv[2] || process.env.Port || 7000;

server.listen(port, () => {
  print(
    chalk.blue.bold(
      ` Listening on http//localhost:${chalk.red(port)} ====>>> 🌎`
    )
  );
});
