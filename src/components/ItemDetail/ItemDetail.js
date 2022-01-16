import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { useContext } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import {CartContext} from '../context/CartContext'
import './ItemDetail.scss'
import Button from '@mui/material/Button';


const ItemDetail = ({product}) => {
    
    
    const [added, setAdded] = useState(false)
    const [qty, setQty] = useState(0);

    
    const {addItem} = useContext(CartContext)
    
    
    
    

   
    const addToCart = (qty) => {
    
        setAdded(true)
        
        setQty(qty)
    }
    
    const handlePurchase =() => {
        addItem(product,qty )
    }
    

    
    
    
    return (
        <div className="Detail-container">
           <figure className="product-detail">
                   <img className="img-detail" src={product?.img} alt="" />
                   <div className="product-name">
                       <h3>{product.name}</h3>
                   </div>
                  <div className="description">
                        <p className="detail">{product?.description}</p> 
                  </div> 
                   <p className="price"> ${product?.price}</p>
                   
                    {added ?
                    <Button variant="outlined">
                        <Link className="Link" to={'/cart'} onClick={handlePurchase}>
                            Ir al carrito
                        </Link>
                    </Button> 
                        :
                        <ItemCount
                            stock={product?.stock}
                            initial={1}
                            onAdd={addToCart}
                         />
               
                    }
                
                     
                 
               </figure>
               
                   
               
        </div>
    )
}

export default ItemDetail
