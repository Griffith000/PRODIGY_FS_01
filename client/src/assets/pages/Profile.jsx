import React from 'react'
import { useSelector } from 'react-redux'
const Profile = () => {
  const currentUser = useSelector((state) => state.user.user)
  return (
    <div >
    <div className='font-semibold text-4xl text-center mt-10'>Profile</div>
    <form className='mx-auto flex flex-col max-w-lg' action="">
      <img className='h-20 w-20 self-center m-3' src={currentUser.profilePicture}/>
      <input defaultValue={currentUser.username} type="text" placeholder='Username' />
      <input  defaultValue={currentUser.email} type="email" placeholder='Email' />
      <input type="password" placeholder='Password' />
      <button className='bg-slate-600 text-white rounded p-2 self-center w-full uppercase'>Update</button>
    <div className='flex justify-between m-2 text-red-700'>
      <button className=''>Delete account</button>
      <button className=' rounded p-2 self-center w-1/4'>Sign Out</button>
    </div>
    </form>
    </div>
  )
}

export default Profile