import React from 'react'
import {useContext, useState} from 'react'
import {CartContext} from '../context/CartContext'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'
import {db} from '../../service/firebase'
import { useNavigate } from 'react-router-dom';
import {
    addDoc,
    collection,
    doc,
    getDoc,
    writeBatch,
} from 'firebase/firestore';
import './Cart.scss'




const Cart = () => {
    
    
    const [form, setForm] = useState({ nombre: '', email: '' });
    const[loading, setLoading] = useState(true)
    
    const {cart,removeItem, cleanCart, getQuantity,getUser} = useContext(CartContext);
    let navigate = useNavigate();


        const fillForm = (e) => {
            const { name, value } = e.target;
            setForm({
                ...form,
                [name]: value,
            });
        };
    
     const finishOrder = () => {
            

            setLoading(false);
            getUser(form)
        

        const objOrder = {
            buyer: { email: form.email, nombre: form.nombre },
            items: cart,
            total: getQuantity(),
            
            
            
            

        };
        
        const outOfStock = []
        const batch = writeBatch(db)
        
        objOrder.items.forEach((prod) => {
            getDoc(doc(db, 'items', prod.id)).then((docSnap) => {
                if (docSnap.data().stock >= prod.cantidad) {
                    batch.update(doc(db, 'items', docSnap.id), {
                        stock: docSnap.data().stock - prod.cantidad,
                    });
                } else {
                    outOfStock.push({ id: docSnap.id, ...docSnap.data() });
                }
            });
        });
        
        if (outOfStock.length === 0) {
            addDoc(collection(db, 'orders'), objOrder)
            .then((doc) => {
                batch.commit().then(() => {
                   
                });
            })
            .catch((error) => {
                console.error(error);
                }).finally(() => {
                    setTimeout(() => {
                        cleanCart()
                        navigate('/dashboard');
                        
                    }, 1000);
                });
             
                
        }
    };

        if(cart.length === 0){
            return(
                <>
                    <h1>Tu carrito esta vacio</h1>
                    <Link to={'/'}>
                    <Button variant="outlined">Volver al inicio</Button>
                    </Link>
                </>
    
            
            )
        }  
        else{
        return (
            <>
                <div className="order-container">
                 

                    {cart.map(producto => {
                                return <div className="product-container">
                                            <div className="product">
                                            <span>Producto</span>
                                            <img src={producto.img} alt="" /> 
                                            </div>
                                            <div className="product"> 
                                                <span>Descripción</span>
                                                {producto.description} 
                                            </div>
                                        
                                            <div className="product">
                                            <span>Precio</span>
                                            {producto.cantidad * producto.price}
                                            </div>
                                            <div className="product">
                                            <span>Cantidad</span>
                                            {producto.cantidad} 
                                            </div>
                                            
                                        
                            
                                    
                                        <div> <Button onClick={()=>removeItem(producto.id)} color="error" variant="contained" size="small">Eliminar</Button></div>
                                    </div>
                                    
                    })}
               
                                    <Button onClick={()=>cleanCart()} variant="contained" color="error" size="small">Limpiar Carrito</Button>
                                    <h3>Complete el formulario para terminar con su compra</h3>
                </div>
                    
                  { loading ? 
                    <div className="form-container">
                    
                    
                    <form action="POST"
                    onSubmit={finishOrder}
                    >   
                        <span>Nombre</span>
                        <input type="text" 
                            onChange={fillForm}
                            name="nombre"
                            placeholder="Nombre"
                            
        
                        />
                        <span>Email</span>
                        <input type="email" 
                            onChange={fillForm}
                            name="email"
                            placeholder="Email"
                        />
                    
                       
                        <button
                            className="btn_submit"
                            disabled={
                                        cart?.length === 0||
                                        form.nombre === '' ||
                                        form.email === ''
                                            }
                            >
                            Finalizar compra
                        </button>
                    </form>
                    
                    </div>
                    :    <h1 >Estamos generando su orden...</h1>                  
                  }                        
            </>     
    
        )   
        
        }


     }

      
     


     
    


export default Cart
