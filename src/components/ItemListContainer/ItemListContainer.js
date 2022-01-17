import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ItemListContainer.scss'
import ClipLoader from "react-spinners/ClipLoader";
import { getProducts } from '../../service/firebase'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId} = useParams()

    useEffect(() => {
                                                           
    getProducts('category', '==', categoryId).then((products) =>{
        setProducts(products)
        }).catch(error => {
            console.log(error)
        }).finally(() => {
            setLoading(false)
            })                                            
    },[categoryId])

    return (
        <div className="itemList-container">
           { loading ?
            <div className="loading-container">
            <ClipLoader 
            color={"blue"} 
            loading={loading} 
             size={150} />
            </div>

         
             :
                <ItemList
                items={products}
                />
          
            
         }   
            
        </div>
       
    )
}

export default ItemListContainer
