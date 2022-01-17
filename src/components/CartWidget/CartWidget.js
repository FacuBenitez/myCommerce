import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom'
import {CartContext} from '../context/CartContext'
import {useContext} from 'react'
import './CartWidget.scss'
const CartWidget = () => {
   
    const {getQuantity} =useContext(CartContext)

    return (


        <div className="cart_widget">
           <Link to={'/cart'}> 
           <ShoppingCartIcon
                        />
            
            
            </Link>
           {getQuantity() > 0 && 
               
                       
                   <p>{getQuantity()}</p>
                  
                
           }
        </div>
    )
}

export default CartWidget
