import React from 'react'

const ItemDetail= ({product, img, title, price, description}) => {
    return (
        <div>
            <figure>
                   <img src={img} alt="" />
                   
                   <figcaption>{title}</figcaption>
                   <p>{description}</p>
                   <p>{price}</p>
                   


               </figure>
        </div>
    )
}

export default ItemDetail
