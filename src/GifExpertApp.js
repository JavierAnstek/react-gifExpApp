import React, { useState } from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {
    // crea el hook de categorias
    const [categories, setCategories] = useState(['Samurai X']);

    return (
        <>
            <h2>Gif Expert App</h2>
            {/* Componente para agregar categorías */}
            <AddCategory setCategories={ setCategories }/>   
            <hr/>
            <ol>
            {/* Renderiza el componente de categorías grid */}
            { categories.map( (category, i) => <GifGrid key={i} category={category} /> ) }
            </ol>
        </>
    )
}

export default GifExpertApp
