import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import { db } from '../../service/firebase'
import {getDoc, doc} from 'firebase/firestore'
import ClipLoader from "react-spinners/ClipLoader";
import './ItemDetailContainer.scss'
const ItemDetailContainer = () => {
    
    
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const  {paramId}  = useParams()
    
    useEffect(() => {
        getDoc(doc(db, 'items', paramId)).then((querySnapshot)=>{
            const product = {id: querySnapshot.id, ...querySnapshot.data()}
            
            setProduct(product)
            setLoading(false)
        }).catch((error) => {
            console.log(error);
        })
     
        
  
        
    }, [paramId])

        
    return (
        <div className="itemDetail-container">
             {
                 loading ?
                <div className="loading-detail">
                 <ClipLoader 
                    color={"blue"} 
                    loading={loading} 
                    size={150} />
                </div>
                 :  <ItemDetail
                    product={product}
                    />
         
             }
             
            
        </div>
    )
}

export default ItemDetailContainer
