import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);
        const [userEmail, setUserEmail] = useState('')
   
    

    
    const getCantidad = () => {
        let subTotal =0;
        cart.forEach(elemento=> {
            
            subTotal += elemento.cantidad
        })
        return subTotal;
       
    }
    


    const addItem = (producto, quantity) => {
      
        const flag = isInCart(producto.id);
        if (flag) {
            let productoRepetido = cart.find (elemento => elemento.id === producto.id);
            productoRepetido.cantidad += quantity;   
            let cartSinRepetido = cart.filter (elemento => elemento.id !== producto.id);
            setCart([...cartSinRepetido, productoRepetido]);
            
        } else {
            setCart([...cart, {...producto, cantidad: quantity}]);
        }
        
        
    }
   


    const isInCart = (item) => {
        
        return cart.some(producto => producto.id === item);
    }

    const removeItem = (itemId) => {
       return setCart(cart.filter(element => element.id !== itemId));

        
    }

    const cleanCart = () => {
        return setCart([]);
    }

    const getUser= (form) => {
        setUserEmail(form)
    }

    return(
        <CartContext.Provider value = {{
            cart,
            addItem, removeItem, cleanCart, getCantidad, isInCart,
            getUser,userEmail
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;