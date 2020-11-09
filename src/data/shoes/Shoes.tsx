import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement,add,del,shoes} from './shoesSlice'

export default function Shoes(){
    
    const dispatch=useDispatch()
    const shoe=useSelector(shoes)
    console.log(shoe)
    
    
    
    
    return(
        <div>
            <p>Add</p>
        </div>
    )
}