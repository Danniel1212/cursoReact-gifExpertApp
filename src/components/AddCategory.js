import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategorias}) => {

    const [inputValue, setInputValue] = useState('');
    
    const hanleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){

            setCategorias(categorias => [inputValue,...categorias]);
            setInputValue("")
        }else{
            alert("Debes de ingresar más de dos letras");
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Ingresa una nueva categoría"
                value={inputValue}
                onChange={hanleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}