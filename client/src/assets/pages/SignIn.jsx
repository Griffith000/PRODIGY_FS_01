import React from 'react'

const SignIn = () => {
  return (
    
    <div>
      <form
        className="flex flex-col justify-center items-center max-w-md mx-auto my-auto "
      >
        <div className="text-4xl m-7 font-semibold text-slate-700 text-center  ">
          SignIn
        </div>
        <input
          type="email"
          placeholder="Email"
        />
        <input
          type="password"
          placeholder="Password"
        />
        <button  className='className=" w-full bg-slate-600 hover:bg-slate-500 text-white font-bold mb-4 py-3 px-8 rounded hover:transition duration-100 disabled:opacity-80"'>
          Sign In
        </button>
      </form>
    </div>
  )
}

export default SignIn