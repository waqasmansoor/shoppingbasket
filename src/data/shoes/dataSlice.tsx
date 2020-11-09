import {createSlice} from '@reduxjs/toolkit'

export const dataSlice=createSlice({
    name:'shoe data',
    initialState:{
        "air-jordan-3-valor-blue": {
            "name": "VALOUR BLUE",
            "img":
              "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
            "price": 15,
            "description":"This is amazing, Please buy it",
            "color":["red","black","white","crimson"],
            "id":0
      
          },
          "jordan-mars-270-london": {
            "name": "JORDAN MARS 270 LONDON",
            "img":
              "https://secure-images.nike.com/is/image/DotCom/CV3042_001_A_PREM?$SNKRS_COVER_WD$&align=0,1",
            "price": 25,
            "description":"This is amazing, Please buy it",
            "color":["blue","black","white","crimson"],
            "id":1
          },
          "air-jordan-1-zoom-racer-blue": {
            "name": "RACER BLUE",
            "img":
              "https://secure-images.nike.com/is/image/DotCom/CK6637_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
              "price": 10,
              "description":"This is amazing, Please buy it",
              "color":["orange","black","white","crimson"],
              "id":2
          },
          "air-jordan-3-valor-red": {
            "name": "VALOUR BLUE",
            "img":
              "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
            "price": 15,
            "description":"This is amazing, Please buy it",
            "color":["red","black","white","crimson"],
            "id":0
      
          },
          "air-jordan-3-valor-yellow": {
            "name": "VALOUR BLUE",
            "img":
              "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
            "price": 15,
            "description":"This is amazing, Please buy it",
            "color":["red","black","white","crimson"],
            "id":0
      
          },
          "air-jordan-3-valor-orange": {
            "name": "VALOUR BLUE",
            "img":
              "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
            "price": 15,
            "description":"This is amazing, Please buy it",
            "color":["red","black","white","crimson"],
            "id":0
      
          },
          "air-jordan-3-valor-white": {
            "name": "VALOUR BLUE",
            "img":
              "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
            "price": 15,
            "description":"This is amazing, Please buy it",
            "color":["red","black","white","crimson"],
            "id":0
      
          },
          "air-jordan-3-valor-black": {
            "name": "VALOUR BLUE",
            "img":
              "https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1",
            "price": 15,
            "description":"This is amazing, Please buy it",
            "color":["red","black","white","crimson"],
            "id":0
      
          },
    },
    reducers:{
        
        add:(state,action)=>{
            
            state=action.payload
            
        }
    }
})
export const {add}=dataSlice.actions

export const data=(state:any)=>state.shoeData
export default dataSlice.reducer