import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/images/Logo.svg'

const index = () => {
  return (
    <>
      <img src={Logo} alt='logo' />
      <form>
        <input type='text' placeholder='Nome Completo' />
        <input type='email' placeholder='Email' />
        <input type='password' placeholder='Password' />

        <button type='submit'>Criar Conta</button>
        <Link to='/login'>Já tenho conta</Link>
      </form>
    </>
  )
}

export default index
