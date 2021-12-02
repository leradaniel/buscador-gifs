import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";

const GifExpertApp = () => {
  //Se crean las categorías con un useState
  const [categories, setCategories] = useState([
    "Higurashi",
    "Umineko",
    "Kimetsu",
  ]);

  //const handleAdd = () => {
  //Si se quiere agregar una categoria nueva, se usa un spread para mantener lo anterior:
  //setCategories([...categories, "Fate"]);
  //Si se quisiera agregar al principio:
  //setCategories(cats => ['Fate', ...cats]);
  //};

  return (
    <>
      <h2>GifExpertApp</h2>
      {/* Se manda la referencia de setCategories al componente */}
      <AddCategory setCategories={setCategories}/>
      <hr />

      <ol>
        {categories.map((category) => {
          //Los elementos llevan una id (keys) únicos de bases de datos
          //Cuando se quiere modificar un elemento específicamente, se usa ese id
          return <li key={category}>{category}</li>;
        })}
      </ol>
    </>
  );
};

export default GifExpertApp;
