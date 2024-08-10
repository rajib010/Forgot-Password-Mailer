import {useState} from 'react'
import{Link} from 'react-router-dom'
import useLogin from '../../hooks/useLogin.js';

function index() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")

  const {login} = useLogin();

  const handleSubmit = async(e) => {
    e.preventDefault();
    await login(email,password);
  }
  return (
    <div className='flex items-center justify-center min-h-screen min-w-md bg-slate-700'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
      <h1 className='text-white text-3xl'>Enter your Login Details</h1>
        <input type="Email" className='max-w-md h-10 p-5 rounded-md' placeholder='Email' value={email}
        onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" className='max-w-md h-10 p-5 rounded-md' placeholder='*****' value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
        <p className='text-sm m-auto text-white underline hover:text-yellow-500'><Link to='/forgot'>Forgot Password?</Link></p>
        <button type='submit' className='border border-collapse p-2 rounded-md bg-blue-800 text-white' >Login</button>
      </form>

    </div>
  )
}

export default index