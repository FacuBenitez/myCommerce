import React from 'react'
import './NavbarStyles.scss';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import{db } from '../../service/firebase'

import{getDocs, collection} from 'firebase/firestore'
import Button from '@mui/material/Button';

const Navbar = () => {
    
    const [categories, setCategories] = useState([])

    useEffect(() => {
       getDocs(collection(db,'categories')).then(querySnapshot=>{
           const categories = querySnapshot.docs.map(doc =>{
               return {id: doc.id, ...doc.data()}
           })

           setCategories(categories)
       })

        
    }, [])
    
    
    return (
        <>
            <nav>
              <Link className="Brand" to={'/'}>Mycommerce</Link>
                {categories.map(category =><Button variant="outlined" className="btn"> <Link className='link' key={category.id} to={`/category/${category.id}`}>  {category.description}</Link></Button>)}



                <CartWidget/>
            </nav>



        </>
    )
}

export default Navbar
