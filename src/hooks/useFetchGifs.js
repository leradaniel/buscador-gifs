//Custom hook.
import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
//No hace falta importar React, ya que no suele usarse JSX.
//Tampoco hay un return con todo el código HTML.

export const useFetchGifs = (category) => {
  //Los hooks pueden tener estados
  //Indican a otros componente que lo usen que rendericen cuando algo cambió
  const [state, setState] = useState({
    //El estado inicial cuando se use por primera vez este hook es este objeto por defecto:
    data: [],
    loading: true,
  });

  //Si se pone el arreglo de dependencias vacío, solamente se llama una vez al contenido.
  //Al poner "category", se ejecuta el efecto cada vez que cambia la categoría.
  //Los efectos no pueden ser async:
  useEffect(() => {
    //Petición HTTP para traer las imágenes
    //Se llama al componente getGifs con la categoría, se recibe las imagenes.
    //Las imagenes recibidas se guardan en la propiedad "data" del objeto
    getGifs(category).then((imgs) => {
      setTimeout(() => {
        setState({
          data: imgs,
          loading: false,
        });
      }, 500);
    });
  }, [category]);

  return state; // {data; [], loading true};
};
