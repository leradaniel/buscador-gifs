import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  //Se llama al hook y se obtiene la data de las imagenes desestructurada:
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className={"animate__animated animate__bounceInDown"}>{category}</h3>
      {/* Si se están cargando las imágenes, se muestra un "Loading": */}
      {loading && <p className={"animate__animated animate__flash"}>Loading</p>}
      <div className="card-grid">
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
