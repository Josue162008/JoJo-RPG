const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'localhost',
  password: 'YES',
  database: 'jojorpg-conta'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão ao banco de dados bem-sucedida!');
});

connection.end();
