if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = require('./config/server');

async function main() {
  await app.listen(app.get('port'));

  console.log('Entorno: ', process.env.NODE_ENV);
  console.log('Servidor en puerto', app.get('port'));
}

main();
