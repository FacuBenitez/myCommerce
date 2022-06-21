import React from 'react'
import './NavbarStyles.scss';
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react';
import{db } from '../../service/firebase'
import{getDocs, collection} from 'firebase/firestore'
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
const Navbar = () => {
    
    const [categories, setCategories] = useState([])
    const [open, setOpen] = useState(false)

    useEffect(() => {
       getDocs(collection(db,'categories')).then(querySnapshot=>{
           const categories = querySnapshot.docs.map(doc =>{
               return {id: doc.id, ...doc.data()}
           })

           setCategories(categories)
       })

        
    }, [])

    const handleClick = () => {
        setOpen(!open)
    }
    
    
    return (
        <>  
            <nav>
              <div className="menu" onClick={handleClick}>
                 {
                     open ? <CloseIcon /> : <MenuIcon/>
                 }
              </div> 
            
   
                   
                   
              <Link className="Brand" to={'/'}>Mycommerce</Link>
                {categories.map(category =><Button key={category.id}variant="outlined" className="btn"> <Link className='link' key={category.id} to={`/category/${category.id}`}>  {category.description}</Link></Button>)}



                <CartWidget/>
            </nav>
                <div className='mobile-container'>
                   {
                          open && <ul className="mobile">
                                {
                                    categories.map(category => {
                                        return <Link key={category.id} to={`/category/${category.id}`} className='link' >{category.description}</Link>
                                    })
                                } 
                          </ul>
                   }  
               </div>



        </>
    )
}

export default Navbar
