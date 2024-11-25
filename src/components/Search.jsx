import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Search = () => {
    let [search,setSearch]=useState("sohil=khann");
    let [userData, setUserData] = useState({});
    const getUserData=async()=>{
        let res= await axios.get(`https://api.github.com/users/${search}`);
        let user=res.data;
        setUserData(user);

    }
    useEffect(()=>{
        getUserData();
    },[])
  return (
    <div>
      <input className='border rounded-sm' onChange={(e)=>{setSearch(e.target.value)}} type="text" placeholder='search here'/>
      <button onClick={()=>{getUserData}}>Search</button>
    </div>
  )
}

export default Search
