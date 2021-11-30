import React from 'react'
import ItemCount from './ItemCount'
import { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { getProducts } from './products';


const ItemListContainer = () => {
    
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        const list = getProducts()
        
        list.then(list => {
            setProducts(list);
        })  


    },[])
    
    return (
        <div>
            <h1>Services myCommerce</h1>

            <ItemCount
                stock={20}
                initial={1}
            />

            <ItemList
                items={products}
            />
            
        </div>
    )
}

export default ItemListContainer
