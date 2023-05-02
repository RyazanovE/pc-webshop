import { configureStore } from '@reduxjs/toolkit'
import { gadjetItem } from 'src/entities/gadget'
import { iconslice } from './slices/iconSlice'


const store= configureStore({
   reducer: {
      icon: iconslice.reducer,
      gadjetItem
   }
})


export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch