import axios from 'axios';
import React, { useEffect, useState } from 'react'
import UserDate from './components/UserDate.jsx';

const App = () => {

    const [users,setUsers]=useState([]);
  const fetchData=async ()=>{
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    setUsers(res.data)
    
  }


    useEffect(()=>{

      fetchData()



    },[])

    console.log(users);
    


  return (

    <section>

      <ul>
            {
              
              users?.map((user)=>(
                <UserDate key={user.}/>
              ))

            }

      </ul>


    </section>
    
  )
}

export default App