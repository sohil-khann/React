import React from 'react'
import {Building2} from 'lucide-react';
const Profile = ({data}) => {
  return (
    <div className='flex justify-center gap-4 w-full p-5'>
      <div className='w-[30%] '>
            <img className='pt-5 hadow-md rounded-full' src={data.avatar_url} alt="profile.png" />
            <h2 className='text-3xl font-semibold bg-red-600'>{data.name}</h2>

            <p>{data.login}</p>
            <p><Building2/></p>
      </div>
         <div className='w-full'>

         </div>
    </div>
  )
}

export default Profile
