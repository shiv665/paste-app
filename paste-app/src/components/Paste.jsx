import React, { useState } from 'react'
import '/src/styles/paste.css'
import { toast } from 'react-hot-toast'
import { useSelector, useDispatch } from 'react-redux'
import {deleteit} from '/src/redux/pasteSlice'
import { useNavigate } from 'react-router-dom'

const Paste = () => {
  const dispatch = useDispatch()
  const pastes = useSelector((state) => state.paste.pastes)
  const navigate=useNavigate();

  function handleView(e, paste) {
    navigate(`/paste/${paste?.id}`);
    
  }
  function handleEdit(e, paste) {
    navigate(`/home/${paste?.id}`);
    
  }
   

  const handleCopy = (content) => {
    navigator.clipboard.writeText(content)
      .then(() => {
        toast.success('Content copied to clipboard!');
      })
      .catch((err) => {
        toast.error('Failed to copy content: ', err);
      });
  };

  const [search,setSearch]=useState('')

  const filterPastes = pastes.filter((paste) => 
    paste.title.toLowerCase().includes(search.toLowerCase()) || 
    paste.content.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
      
      <div className='paste'>
        
          <div>
            <input type="text"
            value={search} placeholder="Search pastes..."
            onChange={(e)=>setSearch(e.target.value)} />
          </div>
         {
          filterPastes.length > 0 ?(filterPastes.map((paste) => {
            const date = new Date(paste.createdAt).toDateString();
              return (
                <div key={paste.id} className='paste-item'>
                    
                    <div className='paste-header'>
                       <h3>{paste.title}</h3>
                        <p>{date}</p>
                    </div>
                    <p className='paste-para'>{paste.content}</p>
                    <div className="buttons" >
                        <button className="buttona" onClick={(e)=>handleEdit(e,paste)}>Edit</button>
                        <button className="buttona" onClick={(e)=>handleView(e,paste)}>View</button>
                        <button className="buttona" onClick={(e)=>dispatch(deleteit(paste))}>Delete</button>
                        <button className="buttona" onClick={(e)=>handleCopy(paste.content)}>Copy</button>   
                    </div>
                </div>
              )
          })):<p>No result found</p>
         }
        
      </div>
  )
}

export default Paste
