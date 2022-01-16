import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ItemCount.scss'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const ItemCount = ({stock, initial,onAdd }) => {
    
    const [count, setCount] = useState(0)


    const IncrementCount = () => {
        if(stock> count){

            setCount(count+1)
        }

    }
    
    const DecrementCount = () => {
        if(count> initial){
            setCount(count-1)
        }
    } 
        
  
        
    return (
        <div>
            
            <h5>{count}</h5>
           <div className="btn-container">

           <button className="btn-count" onClick={IncrementCount}><AddIcon/></button>
            <button className="btn-count" onClick={DecrementCount}><RemoveIcon/></button>
            {count > 0 &&(
                
                    <Button variant="outlined"className="btn-add" onClick={()=> onAdd(count)}>Agregar al carrito</Button>
                
            )}
            </div>
            <Button variant="outlined"><Link className="Link" to={'/'}>Regresar</Link></Button>
        </div>
    )

    }
   
    



export default ItemCount
