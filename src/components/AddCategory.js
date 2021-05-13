import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');

    // va a manejar el enter
    const sendSubmit = (e) => {
        // previene el sumbit
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( cats => [inputValue, ...cats ] );
            setInputValue('');
        }
    };

    return (
        <form onSubmit={sendSubmit}>
            <input type="text" value={inputValue} 
            onChange={ (e) => { setInputValue(e.target.value) } }
            />
        </form>
    )
}

// valida los parametros requeridos
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}


export default AddCategory
