import {configureStore} from '@reduxjs/toolkit'
import shoesSlice from '../data/shoes/shoesSlice'
import dataSlice from '../data/shoes/dataSlice'

export default configureStore({
    reducer:{
        shoeData:dataSlice,
        shoeBasket:shoesSlice
    }
})