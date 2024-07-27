import React from 'react'
import axios  from 'axios';
import {useState,useEffect}  from 'react';
import { Link ,useNavigate,useParams } from 'react-router-dom';

function Update() {
  // const [data,setData] = useState([])
  const {id}=useParams();
  const [value , setValue] = useState({
    name:'',
    email:'',
    phone:''
    })
   const navigate = useNavigate();

  useEffect(()=>{
    axios.get('http://localhost:9000/users/'+id)
    .then((res)=>{
      setValue(res.data);
    })
    .catch((err)=>{console.log(err)})
  })
  const handleUpdate=(event)=>{
    event.preventDefault();
    axios.put('http://localhost:9000/users/'+id,value)
        .then(res=>{
          console.log(res);
          navigate('/')
        })
        .catch(err=>console.log(err))
  }
  return (
    <div className='d-flex w=100 vh-100 justify-content-center align-items-center bg-light'>
    <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounder'>
          <h1>Update User</h1>
          <form  onSubmit={handleUpdate}>
            <div className='mb-2'>
              <label htmlFor='name'>Name:</label>
              <input type='text' name='name' className='form-control' placeholder='enter name' value={value.name} onChange={e=>setValue({...value,name: e.target.value})}></input>
            </div>
            <div className='mb-2'>
              <label htmlFor='name'>Email:</label>
              <input type='email' name='email' className='form-control' placeholder='enter email' value={value.email} onChange={e=>setValue({...value,email: e.target.value})}></input>
            </div>
            <div className='mb-2'>
              <label htmlFor='name'>phone</label>
              <input type='text' name='phone' className='form-control' placeholder='enter phone' value={value.phone} onChange={e=>setValue({...value,phone: e.target.value})}></input>
            </div>
              <button className='btn btn-success'>Update</button>
              <Link to='/' className='btn btn-primary ms-3'>Back</Link>
          </form>

    </div>

    </div>
  )
}

export default Update