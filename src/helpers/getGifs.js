// llama la API de Gif
export const getGif = async (category) => {
    // petición a la Api
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=n6fdiGRswKeolTGG4tTDAddOVGoAvfGx`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    // mapea la data para poder trabajar solo con los datos que nos interesan
    const gifs = data.map( (img) => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    }); 

    return gifs
};