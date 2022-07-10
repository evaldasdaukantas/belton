import React from 'react'
import './button.css'
import { useNavigate } from 'react-router-dom';

const button = () => {
  let navigate = useNavigate();
  return (
    <div>
        <button onClick={()=>{navigate('/about')}}>Let's talk</button>
    </div>
  )
}

export default button