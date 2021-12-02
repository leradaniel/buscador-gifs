import React, { useEffect, useState } from "react";
import { GifGridItem } from "./GifGridItem";
import { getGifs } from "./helpers/getGifs";

export const GifGrid = ({ category }) => {
  //Estado que va a almacenar la información de las imágenes recibidas:
  const [images, setimages] = useState([]);
  //Al poner el arreglo de dependencias vacío, solamente se llama una vez al contenido.
  //Al poner "category", se llama cada vez que la categoría cambia
  useEffect(() => {
    //Se llama al componente getGifs con la categoría, se recibe las imagenes y las setea.
    getGifs(category).then(setimages);
  }, [ category ]);

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
