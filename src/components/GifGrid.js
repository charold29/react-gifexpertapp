
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs( category );

    return (
        <>
            <h3 className="animate__animated animate__fadeInUp"> { category } </h3>

            {loading && <p className="ldtxt animate__animated animate__flash ">Loading</p> } 
            {/* solo evalua el true */}
        
            <div className="card-grid ">
                {
                    images.map( img => (
                        <GifGridItem  
                            key={ img.id }
                            { ...img }
                        />
                    ))
                    // images.map( ({id,title,url}) => (
                    //         <li key={id}> 
                    //             <p>{ title } </p>
                    //             <img src={url}></img>
                    //         </li>
                    // ))
                }
            </div>
            
        </>
    )
}
