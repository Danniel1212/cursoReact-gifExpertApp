import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images,loading} = useFetchGifs(category);
    
    return (
        <>
            <h4 className="animate__animated animate__fadeIn">{category}</h4>
            
            {
                loading && <h4 style={{ width:"fit-content" }} className="animate__animated animate__pulse animate__infinite infinite">Cargando...</h4>
            }

            <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem 
                            key={img.id} 
                            {...img} 
                        />
                    ))
                }
            </div>
        </>
    )
}