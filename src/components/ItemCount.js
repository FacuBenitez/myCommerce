import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock,initial }) => {
    
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
            <h1>{count}</h1>
            <button onClick={IncrementCount}> + </button>
            <button onClick={DecrementCount}> - </button>
        </div>
    )
}

export default ItemCount
