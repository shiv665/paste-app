import React from 'react'
import '/src/styles/view.css'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add , update} from '/src/redux/pasteSlice'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'

const ViewPaste = () => {
    const dispatch = useDispatch();
    const pastes = useSelector((state)=>state.paste.pastes)


  
    const {id}=useParams();    

  
  
    const paste=pastes.find((paste)=>paste.id===id)
    
    const navigate=useNavigate()
   
     function handleClick(){
       navigate('/')
     }
    
  
    return (
      <div className="home">
  
  
        <div className="header-group">
  
                <input type="text" className="input"
                disabled
                value={paste.title} 
                
                />
  
  
                <button className="button" onClick={handleClick} > "Create New Paste"</button>
                  
  
        </div>
  
        <div className="textarea-div">
              <textarea name="" rows={20} cols={20} className="textarea"
              disabled
              placeholder='Your paste here'
              value={paste.content}
              
              ></textarea>
        </div>
      </div>
    )
}

export default ViewPaste
