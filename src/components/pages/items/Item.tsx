import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {data} from '../../../data/shoes/dataSlice'
import {add} from '../../../data/shoes/shoesSlice'

import './Item.css'

function Item(){
    const shoeData=useSelector(data)
     const {slug}=useParams<{slug:string}>()
     const shoe=shoeData[slug]
     const dispatch=useDispatch()
     const handleClick=()=>{
        dispatch(add({id:slug}))
    }

     if(!shoe){
         return (
            <h3>
                No Match for <code>{`products/${slug}`}</code>
            </h3>
         )
    }
    

    const {name,img,price,color,description}=shoe
    return(
        <div className='details'>
        
            <img src={img} alt={name} />
            <div className='box'>
                <div className='row'>
                    <h2>{name}</h2>
                    <span>{price}$</span>
                </div>
                <p className='color'>
                    {color.map((col: string,i: number)=>
                        <button key={i}
                        style={{background:col}}
                        >
                        </button>
                    )}
                </p>
                <p className="description">
                    {description}
                </p>
                
        <div className="cart"
                onClick={handleClick}
                >
                    Add to Cart
        </div>
            </div>
        </div>

        
    )
}

export default Item