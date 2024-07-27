import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios  from 'axios';



function Create() {
  const [value , setValue] = useState({
    name:'',
    email:'',
    phone:''
    })
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
      event.preventDefault();
        axios.post('http://localhost:9000/users',value)
        .then(res=>{
          console.log(res);
          navigate('/')
        })
        .catch(err=>console.log(err))
  }
    
  return (
    <div className='d-flex w=100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounder'>
          <h1>ADD a User</h1>
          <form onSubmit={handleSubmit}>
            <div className='mb-2'>
              <label htmlFor='name'>Name:</label>
              <input type='text' name='name' className='form-control' placeholder='enter name' onChange={e=>setValue({...value,name: e.target.value})}></input>
            </div>
            <div className='mb-2'>
              <label htmlFor='name'>Email:</label>
              <input type='email' name='email' className='form-control' placeholder='enter email'
              onChange={e=>setValue({...value,email: e.target.value})}></input>
            </div>
            <div className='mb-2'>
              <label htmlFor='name'>phone</label>
              <input type='text' name='phone' className='form-control' placeholder='enter phone' 
              onChange={e=>setValue({...value,phone: e.target.value})}></input>
            </div>
              <button className='btn btn-success'>Submit</button>
              <Link to='/' className='btn btn-primary ms-3'>Back</Link>
          </form>

    </div>

    </div>
  )
}

export default Create