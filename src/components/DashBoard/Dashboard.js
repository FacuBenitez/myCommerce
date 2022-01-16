import React from 'react'
import {
    collection,
    getDocs,
    query,
} from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {CartContext} from '../context/CartContext'
import { db } from '../../service/firebase'
import Button from '@mui/material/Button';
import './DashBoard.scss'


const Dashboard = () => {
    const [order, setOrder] = useState([]);
    const { userEmail } = useContext(CartContext);
   

    useEffect(() => {

        const ref = query(collection(db, 'orders'));
        getDocs(ref).then((snapshot) => {
            const order = snapshot.docs.map((doc) => {
                const data = doc.data();
            
                return {
                    id: doc.id,
                    ...data,
                    
                };
            });
            setOrder(order.filter((ticket) => ticket.buyer.email === userEmail.email));
        });
    }, [userEmail.email]);




    return (
        <div className="dashboard-container">
            <h1>Gracias por su compra aqui esta el ticket de su orden</h1>

            <section>{order.map(order => {
                return <>
                        <h1 className="brand">MyCommerce</h1>
                        <h3>Gracias por comprar en MyCommerce {order.buyer.nombre}</h3>
                        
                           <h3>Aqui esta el id de su compra {order.id}</h3> 
                        </>
                    
            })}</section>

            <Button variant="outlined">
                <Link className="Link" to={'/'}> Volver al inicio</Link>     
            </Button>
        </div>
 
    )
}

export default Dashboard
