class Fotos {
  async obtenerFotos() {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20');
    const fotos = await res.json();

    return fotos;
  };
}

export default Fotos;
