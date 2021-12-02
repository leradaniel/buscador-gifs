import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  //Se crean las categorías con un useState
  const [categories, setCategories] = useState(["Kimetsu no Yaiba"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      {/* Se manda la referencia de setCategories al componente */}
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          //Los elementos llevan una id (keys) únicos de bases de datos
          //Cuando se quiere modificar un elemento específicamente, se usa ese id
          //return <li key={category}>{category}</li>;
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
