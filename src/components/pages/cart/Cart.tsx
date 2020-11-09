import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {data} from '../../../data/shoes/dataSlice'
import {shoes,increment,decrement} from '../../../data/shoes/shoesSlice'
import './Cart.css'

export default function Cart() {
    const shoeData=useSelector(data)
    const shoeBasket=useSelector(shoes)
    const dispatch=useDispatch()
    let TotalPrice=0;

    const inc_item = (id:string) => {
        console.log(id)
        dispatch(increment({id:id}))
    }
    const dec_item = (id:string) => {
        dispatch(decrement({id:id}))
    }

    return (
        <>
            <div className='cart_container'>{
                shoeBasket.map((item:{id:string,count:number}, i:number) => {
                    let shoe = shoeData[item.id]
                    const { name, img, color, price, description } = shoe
                    TotalPrice=TotalPrice+price*item.count
                    
                    return (
                        <div className='details' key={i}>
                            <img src={img} alt={name} />
                            <div className='box'>
                                <div className='row'>
                                    <h2>{name}</h2>
                                    <span>{price*item.count}$</span>
                                </div>
                                <p className='color'>
                                    {color.map((col:string, i:number) =>
                                        <button key={i}
                                            style={{ background: col }}
                                        >
                                        </button>
                                    )}
                                </p>
                                <p className="description">
                                    {description}
                                </p>
                                <div className="amount">
                                    <button onClick={()=>dec_item(item.id)} className="button"> - </button>
                                    <span>{item.count}</span>
                                    <button onClick={()=>inc_item(item.id)} className="button"> + </button>
                                </div>

                            </div>
                    </div>
                )

            })
        }
            </div>
            <div className="total">
                <h3>
                    Total : {TotalPrice}$
                </h3>
            </div>
        
        </>
    )




}
