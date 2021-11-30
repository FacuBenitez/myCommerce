import React from 'react'
import './Item.scss'
const Item = ({item, price, img}) => {
    return (
        <div>
            
            <figure>
                <img src={img} alt="" />
                
                <figcaption>{item}</figcaption>
                <p>{price}</p>


            </figure>
    
     
        </div>
    )
}

export default Item
