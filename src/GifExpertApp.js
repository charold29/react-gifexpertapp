import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () =>{

    // const categories = ['Death Note', 'Naruto Shippuden', 'Dragon Ball Z'];

    const [categories, setCategories] = useState(['Naruto Shippuden']);

    // const handleAdd = () => {
    //     // setCategories([...categories, 'Candy']);
    //     setCategories(cats => [...cats, 'Candy']);
    // }

    return (
        < >
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />

            <ol>
                {
                    categories.map(category=>(
                    <GifGrid 
                        key={category}
                        category = { category} 
                    />
                    ))
                }
            </ol>
            
        </>
    )

}

export default GifExpertApp;
