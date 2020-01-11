import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.svg'

const index = () => {
  return (
    <>
      <img src={Logo} alt='logo' />
      <form>
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />

        <button type='submit'>Login</button>
        <Link to='/register'>Criar conta</Link>
      </form>
    </>
  )
}

export default index
