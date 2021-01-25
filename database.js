const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '@JORGE1989',
      database : 'knexjs'
    }
    
  });


  module.exports= knex;