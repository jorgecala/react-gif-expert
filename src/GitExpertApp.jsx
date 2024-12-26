import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GitExpertApp = () => {
    const [ categories, setCategories ] = useState([ 'One Punch' ]);

    const onAddCategory = ( newCategory ) => {
        if ( categories.some( (category) => category.toLocaleLowerCase() === newCategory.toLocaleLowerCase()) ) return;
        setCategories( [ newCategory, ...categories ] );
    }
    
  return (
    <>
    <h1>GitExpertApp</h1>
    <AddCategory 
        onNewCategory={ onAddCategory }
    />
    { 
        categories.map((category) => (
            <GifGrid key={ category } category={ category } />
        ))
    }
    </>
  )
}
