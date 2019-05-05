import Fotos from './fotos';

require('../styles/estilos.scss');
require('../static/fazt.jpg');

const fotos = new Fotos();

async function main() {
  console.log(await fotos.obtenerFotos());
}

function isValidJSON(text) {
  try {
    JSON.parse(text);

    return true;
  } catch {
    return false;
  }
}

console.log(isValidJSON('Hola'));

main();
