import { Input } from '@material-tailwind/react'
import React from 'react'
import { Link } from 'react-router-dom'

const LogIn = () => {

  const authUser = (e) => {
    e.preventDefault()
  }

  return (
    <section className='container min-h-screen flex items-center'>
      <form onSubmit={(e) => authUser(e)} className='auth-card mx-auto border p-5 sm:p-8 rounded-xl space-y-8 w-full sm:w-auto'>
        <h3 className='text-center text-2xl font-bold'>Kirish</h3>
        <div className="sm:w-80 space-y-6">
          <Input label='Email*' />
          <Input type='password' label='Parol' />

          <button className='py-2 px-6 bg-blue-c text-white rounded-[10px] text-lg font-semibold w-full'>
            Kirish
          </button>

          <div className='text-center text-sm space-x-2 text-btn-gray'>
            <span>Akkauntingiz yo'qmi?</span>
            <Link className='text-blue-c font-semibold' to="/auth" >Ro'yhatdan o'tish</Link>
          </div>
        </div>
      </form>
    </section>
  )
}

export default LogIn