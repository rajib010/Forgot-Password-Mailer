import React from 'react'
import{Link} from 'react-router-dom'

function index() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='flex items-center justify-center min-h-screen min-w-md bg-slate-700'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
      <h1 className='text-white text-3xl'>Enter your Login Details</h1>
        <input type="text" className='max-w-md h-10 p-5 rounded-md' placeholder='UserName' />
        <input type="password" className='max-w-md h-10 p-5 rounded-md' placeholder='*****'/>
        <p className='text-sm m-auto text-white underline hover:text-yellow-500'><Link to='/forgot'>Forgot Password?</Link></p>
        <button type='button' className='border border-collapse p-2 rounded-md bg-blue-800 text-white'>Login</button>
      </form>

    </div>
  )
}

export default index