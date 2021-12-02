import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  //Estado que va a almacenar la información de las imágenes recibidas:
  const [images, setimages] = useState([]);
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
    //Se guardan las imagenes en un estado:
    setimages(gifs);
  };

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {/* Por cada imagen en el estado, se crea un componente: */}
        {images.map((img) => {
          //Se podrían enviar cada una de las propiedades con un spread:
          //Esto permite que no mandemos la img enter.
          //Tampoco que tengamos que mandar cada propiedad por separado.
          //O sea, title= img.title, url = img.url, etc:
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
