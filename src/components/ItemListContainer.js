import React from 'react'
import ItemCount from './ItemCount'

const ItemListContainer = () => {
    return (
        <div>
            <h1>Services myCommerce</h1>

            <ItemCount
                stock={20}
                initial={1}
            />

            
        </div>
    )
}

export default ItemListContainer
