import React, { useEffect, useState } from "react";

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([])
  //Al poner el arreglo de dependencias vacío, solamente se llama una vez al contenido:
  useEffect(() => {
    getGifs();
  }, []);

  //Función asíncrona para hacer peticiones HTTP y traer los gifs.
  //Con el Search Endpoint de la API de Giphy: https://developers.giphy.com/docs/api/endpoint#search
  const getGifs = async () => {


    //Endpoint de una búsqueda:
    const url =
      "https://api.giphy.com/v1/gifs/search?q=Kimetsu+no+Yaiba&limit=10&api_key=K4yeBra8OiNy7EuURHUin81fZA1TBjoi";
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
    setImages(gifs);
  };

  return (
    <div>
      <h3>{category}</h3>
      <ol>
        {images.map((img) => {
          return <li key={img.id}>{img.title}</li>;
        })}
      </ol>
    </div>
  );
};
