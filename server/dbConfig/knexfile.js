// To connect knex to our database server(postgresSQL)
'use strict';
module.exports = {
  client: 'pg',
  connection: `postgres://localhost/${Application database name}`,
  useNullAsDefault: true
};
