import React, { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  //Función encargada de manejar cuando se apreta ENTER en la caja de texto
  const handleSubmit = (e) => {
    //Se previene el comportamiento por defecto del formulario (refresh de la pagina)
    e.preventDefault();
    //Validacón: Al menos 2 carácteres
    if (inputValue.trim().length > 2) {
      //Se recibe por parámetro los valores de las categorías y se agrega la nueva:
      setCategories((categories) => [...categories, inputValue]);
      //Se resetea el valor ingresado:
      setInputValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Ingrese una categoría de al menos 3 letras y oprima ENTER"
      />
    </form>
  );
};

//Parámetros recibidos obligatorios:
AddCategory.propTypes = {
  //setCategories tiene que ser una función obligatoria:
  setCategories: PropTypes.func.isRequired,
};
