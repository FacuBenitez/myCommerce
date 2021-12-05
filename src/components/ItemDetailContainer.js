import React from 'react'
import { getItems } from './products'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState([])
    
    useEffect(() => {
        const list = getItems()
        
        list.then(list => {
            setProduct(list);
        })  
    },[])
    
    return (
        <div>
            <ItemDetail
                product={product}
                img={product.img}
                title={product.name}
                price={product.price}
                description={product.description}
            />
        </div>
    )
}

export default ItemDetailContainer
