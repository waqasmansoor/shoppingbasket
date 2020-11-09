import {createSlice} from '@reduxjs/toolkit'

export const shoesSlice=createSlice({
    name:'shoes',
    initialState:[] as {id:string,count:number}[],
    reducers:{
        increment:(state,action)=>{
            
            for(var i=0;i<state.length;i++){
                if(state[i].id===action.payload.id){state[i].count++;console.log(state[i])}
            }
            
        },
        decrement:(state,action)=>{
            
            for(var i=0;i<state.length;i++){
                if(state[i].id===action.payload.id)
                {
                    state[i].count--
                    if(state[i].count===0){
                        state.splice(i,1)
                    }

                }
            }
             
        },
        del:(state,action)=>{
            for(var i=0;i<state.length;i++){
                if(state[i].id===action.payload.id){
                    state.splice(i,i)
                }
            }
            
        },
        add:(state,action)=>{
            let present=false

            if(state.length>0){
                let items_present=state.filter((k,i)=>k.id===action.payload.id)
                if(items_present.length>0){
                    present=true
                    alert("Item Already Added to Cart")
                }
                    
                  
                
                
              }
              if(!present){
                    state.push({id:action.payload.id,count:1})
                      
              }
              
            
        }
    }
})
export const {increment,decrement,add,del}=shoesSlice.actions

export const shoes=(state:any)=>state.shoeBasket
export default shoesSlice.reducer