import React from 'react'
import '/src/styles/home.css'
import { useState , useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add , update} from '/src/redux/pasteSlice'
import { useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'


const Home = () => {
  const [value, setValue] = useState('')
  const [para, setPara] = useState('')
  const dispatch = useDispatch();
  const pastes = useSelector((state)=>state.paste.pastes)
  const [searchParams, setSearchParams] = useSearchParams()
  const {id}=useParams();    


  const pastei=id   





  const handleClick=()=>{

    const paste={
      title: value,
      content: para,
      id: (pastei)?pastei: Math.random().toString(36).substring(2, 9),
      createdAt : new Date().toISOString(),
    };
    if(paste.title===''){
      toast.error('Title cannot be empty')
      return
    }

    if(pastei){
      dispatch(update(paste))
    }
    else{
      dispatch(add(paste))
    }

    setValue('')
    setPara('')
    setSearchParams({})

  }
  useEffect(() => {
    if (pastei) {
      const paste = pastes.find((p) => p.id === pastei);
      if (paste) {
        setValue(paste.title);
        setPara(paste.content);
      }
    }
  }, [pastei]);
  

  return (
    <div className="home">


      <div className="header-group">

              <input type="text" className="input"
              placeholder="Enter your text here"
              value={value} 
              onChange={(e)=> setValue(e.target.value)}
              
              />


              <button className="button" onClick={handleClick} >{pastei ? "Update Paste" : "Create Paste"} </button>
                

      </div>

      <div className="textarea-div">
            <textarea name="" rows={20} cols={20} className="textarea"
            placeholder='Your paste here'
            value={para}
            onChange={(e)=> setPara(e.target.value)}
            
            ></textarea>
      </div>
    </div>
    
  )
}

export default Home
