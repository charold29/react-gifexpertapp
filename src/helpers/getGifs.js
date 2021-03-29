//encodeURI = es para convertir espacios en _ para la url
export const getGifs = async(category) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&offset=0&api_key=Y75Ffu86v8FKcAo9VozYVcc22IhXb4HG`;
    const resp = await fetch(url);
    //fetch es para el manejo de peticiones permite acceder y manipular el http
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url // para asegurarnos de que son imagenes (?)
        }
    })

    return gifs;
}