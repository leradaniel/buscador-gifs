// Los helpers son funciones que hacen un trabajo en específico
// Pueden recibir parámetros, los procesan y devuelven algo.

//Función asíncrona para hacer peticiones HTTP y traer los gifs.
  //Con el Search Endpoint de la API de Giphy: https://developers.giphy.com/docs/api/endpoint#search
  export const getGifs = async (category) => {
    //Endpoint de una búsqueda (encode reemplaza los espacios y simbolos especiales):
    const url =
      `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=K4yeBra8OiNy7EuURHUin81fZA1TBjoi`;
    //Fetch de los datos de la URL:
    const resp = await fetch(url);
    const { data } = await resp.json();

    //Función que rescata solamente los datos que nos interesan en un arreglo:
    const gifs = data.map((img) => {
      //Se devuelve un objeto con los datos que especificamos
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    });
    //Se devuelve una promesa:
    return gifs;
  };