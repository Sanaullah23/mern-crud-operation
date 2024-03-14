import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Update() {
    const {id}=useParams()
    const [name, setName]=useState()
    const [email, setEmail]=useState()
    const [age, setAge]=useState()
    const navigate=useNavigate()
    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/getuser/'+id)
        .then(result=>{
            setName(result.data.userId.name)
            setEmail(result.data.userId.email)
            setAge(result.data.userId.age)
            
        })
        .catch(err=> console.log(err))

    },[])

    const Upadte=(e)=>{
        e.preventDefault();
        axios.put('http://localhost:5000/api/v1/updateUser/'+id,{name, email,age})
        .then(result => {
            console.log(result.data)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='bg-gray-800 h-screen'>
    <div className='flex  flex-col justify-center items-center pt-[10rem]'>
    <h1 className='text-white'>UPDATE USER</h1> <br />
        <form className='flex flex-col gap-8' onSubmit={Upadte}>
           
            <div className='px-8 py-2 bg-white rounded-xl'>
                <input type="text" placeholder='Enter Name' required className='focus:outline-none' 
                value={name} onChange={(e)=> setName(e.target.value)}/>
            </div>
            <div className='px-8 py-2 bg-white rounded-xl'>
                <input type="email" placeholder='Enter Email' required className='focus:outline-none'
                 value={email} onChange={(e)=> setEmail(e.target.value)}/>
            </div>
            <div className='px-8 py-2 bg-white rounded-xl'>
                <input type="number" placeholder='Enter Age' required className='focus:outline-none' 
                value={age} onChange={(e)=> setAge(e.target.value)}/>
            </div>
            <div className='m-auto'>
               <button  className='bg-blue-900 px-8 py-3 text-white rounded-xl'>Update</button>
            </div>

        </form>
    </div>
</div>
  )
}

export default Update