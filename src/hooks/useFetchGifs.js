// todos los hooks comienzan con use en su nombre de archivo

import { useEffect, useState } from "react"
import { getGif } from '../helpers/getGifs';

/** Creación de un custom hooks */
export const useFetchGifs = (category) => {
    // utiliza un useState
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // utilza useEffec para controlar el renderizado de la información
    // si la categoría cambia, entonces se recarga la aplicación
    useEffect( () => {
        // realiza la petición de las imagenes
        getGif(category).then(imgs => setState({ data: imgs, loading: false }))
    }, [category]);

    // retorna valores
    return state; // { data: [], loading: true };
}
