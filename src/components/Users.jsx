import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Users() {
    const [users, setUsers]=useState([])

    useEffect(() => {
        async function fetchBlogData() {
          try {      
            const response = await axios.get('http://localhost:5000/api/v1/getUsers');
            if (response.status === 200) {
              const userData = response.data.usersData;
              setUsers(Array.isArray(userData) ? userData : []);
            } else {
              throw new Error(`Error fetching userData: ${response.status}`);
            }
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchBlogData();
      }, []);

      const handleDelete=(id)=>{
         axios.delete('http://localhost:5000/api/v1/deleteUser/'+id)
         .then(result=>{
            console.log(result.data)
            window.location.reload()
           })
         .catch(err=>{
            console.log(err)
         })
      }
     
  return (
    <div className='bg-gray-800'>
    
        <table className='bg-white rounded-xl '>
               
                <thead>
                <Link to="/Create" className=' ml-2  px-4 py-2 bg-orange-600 rounded-xl'>ADD+</Link>
                    <tr>
                        <th className='px-8 py-2'>Name</th>
                        <th className='px-8 py-2'>Email</th>
                        <th className='px-8 py-2'>Age</th>
                        <th className='px-8 py-2'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user)=>{
                            return <tr>
                                <td className='px-8 py-2'>{user.name}</td>
                                <td className='px-8 py-2'>{user.email}</td>
                                <td className='px-8 py-2'>{user.age}</td>
                              <Link to={`/Update/${user._id}`}> <button className='px-6 py-2 m-1 bg-green-700 text-white rounded-xl'>Edit</button></Link>
                                <button className='px-6 py-2 bg-red-700 text-white rounded-xl mr-2' onClick={(e)=>handleDelete(user._id)}>Delete</button>
                            </tr>
                        })
                    }
                </tbody>
            </table>
       
    </div>
  )
}

export default Users