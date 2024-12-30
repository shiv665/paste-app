import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
  pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : [],
}

console.log(localStorage.getItem('pastes'))  

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    add: (state,action)=>{
      const idx=state.pastes.findIndex((paste)=>paste.id===action.payload.id)
      if(idx===-1){
        state.pastes.push(action.payload)
        localStorage.setItem('pastes',JSON.stringify(state.pastes))
        toast.success('Paste added')
      }
      else{
        toast.error('Paste already exists')
      }
    },
    update: (state,action) => {
      const idx=state.pastes.findIndex((paste)=>paste.id===action.payload.id)
      if(idx>=0){
        state.pastes[idx]=action.payload
        localStorage.setItem('pastes',JSON.stringify(state.pastes))
      }
      
        toast.success('Paste updated')
     
    },
    deleteit: (state, action) => {
      const idx=state.pastes.findIndex((paste)=>paste.id===action.payload.id)
      if(idx>=0){
        state.pastes.splice(idx,1)
        toast.success('Paste deleted')
        localStorage.setItem('pastes',JSON.stringify(state.pastes))
      }
      
    },
    reset: (state) => {
      state.pastes = []
      localStorage.removItem('pastes')
  },
  },
})

// Action creators are generated for each case reducer function
export const { add, update, deleteit, reset } = pasteSlice.actions

export default pasteSlice.reducer