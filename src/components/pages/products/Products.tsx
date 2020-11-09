import React from 'react';
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import {data} from '../../../data/shoes/dataSlice'
import {add} from '../../../data/shoes/shoesSlice'
import './Products.css';

function Products(){
    const shoeData=useSelector(data)
    const dispatch=useDispatch()
    const handleClick=(id:string)=>{
          dispatch(add({id:id}))
    }
    
    return(
        <div id='product'>
                
            {
                Object.keys(shoeData).map((k,i)=>{
                    let {name,img,price,description}=shoeData[k]
                    return (
                        
                        <li key={i} className='card'>
                            <Link to={`/products/${k}`}>
                                <img src={img} alt={name} />
                                <h3>{name}</h3>
                            </Link>
                            <span>{price}$</span>
                            <p>{description}</p>
                            <button onClick={()=>handleClick(k)}>Add to Cart</button>
                        </li>
                    )

                }
                )
            }
        </div>
    )
}

export default Products