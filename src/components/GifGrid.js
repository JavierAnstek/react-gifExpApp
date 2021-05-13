// import React, { useEffect, useState } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    /** Usa el custom hooks */
    const {data:images, loading} = useFetchGifs(category);

    // console.log(data, loading);
    // Información a retornar
    return (
        <>
            <h3>{category}</h3>
            {loading && <p>Loading..</p>}
            <div className="card-grid">
                { images.map( (img) => <GifGridItem key={img.id} {...img} /> ) }
            </div>
        </> 
    )
}
