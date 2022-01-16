import React from 'react'
import './Item.scss'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

const Item = ({item}) => {
    
    
    return (
        <div className="item-container">
           

            
               <article>
                   <picture>
                        <img src={item.img} alt="" />
                   </picture> 
                    
                   
                   <figcaption>{item.name}</figcaption>
                   <Button variant="outlined"><Link className="btn" to={`/item/${item.id}`}>Ver detalle</Link></Button>


               </article>
           
            
        </div>
    )
}

export default Item
