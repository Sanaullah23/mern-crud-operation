import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
    const [name, setName]=useState()
    const [email, setEmail]=useState()
    const [age, setAge]=useState()
    const navigate=useNavigate()

    const submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:5000/api/v1/createUser",{name, email,age})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='bg-gray-800 h-screen'>
        <div className='flex  flex-col justify-center items-center pt-[10rem]'>
        <h1 className='text-white'>ADD USER</h1> <br />
            <form className='flex flex-col gap-8' onSubmit={submit}>
               
                <div className='px-8 py-2 bg-white rounded-xl'>
                    <input type="text" placeholder='Enter Name' required className='focus:outline-none' onChange={(e)=> setName(e.target.value)} />
                </div>
                <div className='px-8 py-2 bg-white rounded-xl'>
                    <input type="email" placeholder='Enter Email' required className='focus:outline-none'  onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div className='px-8 py-2 bg-white rounded-xl'>
                    <input type="number" placeholder='Enter Age' required className='focus:outline-none'  onChange={(e)=> setAge(e.target.value)} />
                </div>
                <div className='m-auto'>
                   <button  className='bg-blue-900 px-8 py-3 text-white rounded-xl'>Submit</button>
                </div>

            </form>
        </div>
    </div>
           
  )
}

export default Create