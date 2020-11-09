import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import Menu from '../images/bars-solid.svg'
import Close from '../images/times-solid.svg'
import CartIco from '../images/shopping-cart-solid.svg'
import {useSelector} from 'react-redux'
import {shoes} from '../../data/shoes/shoesSlice'
import './NavBar.css'

export default function NavBar(){
    const [toggle,setToggle]=useState(false)
    
    const shoeStore=useSelector(shoes)

     var len=0
     
     if(shoeStore.length>0){
      for(var i=0;i<shoeStore.length;i++){
        len=len+shoeStore[i].count
      }
    }
    
    
    function handleClick(t:boolean){
        
        setToggle(t)
    }
    



    return(
        <header>
            <div className='menu' onClick={()=>handleClick(true)}>
                <img src={Menu} alt='' width='20' />
            </div>
            
            <nav>
                <ul className={toggle?'toggle':''}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/products'>Products</Link></li>
                    <li className='close' onClick={()=>handleClick(false)}>
                        <img src={Close} alt='' width='20' />
                    </li>
                
                    <li className='cart-ico'>
                        <span>{len}</span>
                        <Link to='/cart'>Cart
                            <img src={CartIco} alt='' width='20' />
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
        
    )
}