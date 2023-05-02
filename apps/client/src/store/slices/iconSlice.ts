import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  icon: string;
}

const initialState: IInitialState = {
  icon: "blabla"
}

 
export const iconslice = createSlice({
name:"icon",
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
