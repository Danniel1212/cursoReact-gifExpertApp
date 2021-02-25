import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
    const [categorias, setCategorias] = useState(['One piece'])

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias} />
            <ol>
                {
                    categorias.map((categoria) => (
                        <GifGrid 
                            key={categoria} 
                            category={categoria} 
                        />
                    ))
                }
            </ol>
        </>
    )
}
