const config = require('./config')

const db = require('knex')({
  client: 'mysql',
  connection: {
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
  }
});

db.raw('select 1+1 as result').then(() => {
  console.log('you are connected');
});

db.schema.createTable('survey', (table) => {
  table.increments('id');
  table.string('address', 50);
  table.string('rooms', 50);
  table.integer('price', 50);
  table.string('pets', 50);
})
