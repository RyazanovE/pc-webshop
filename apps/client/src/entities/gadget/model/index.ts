import { actions } from 'src/store/actions';
import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  icon: string;
}

const initialState: IInitialState = {
  icon: "blabla"
}

 
export const gadgetItemSlice = createSlice({
name:"gadgetItemSlice",
initialState,
reducers:{
     iconMoon(state) {
        state.icon= 'moon'
     },
     iconSun(state) {
        state.icon= 'sun'
    },
   }
})

export const gadgetItemSliceActions = gadgetItemSlice.actions 

export const gadjetItem = gadgetItemSlice.reducer 