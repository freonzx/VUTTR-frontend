import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input } from '@rocketseat/unform'
import * as Yup from 'yup'
import Logo from '../../assets/images/Logo.svg'

const index = () => {
  function handleSubmit(data) {
    console.tron.log(data)
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('* Insira um e-mail valido')
      .required('* E-mail obrigatório'),
    password: Yup.string()
      .min(6)
      .required('* Senha obrigatória'),
  })

  return (
    <>
      <img src={Logo} alt='logo' />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name='email' type='email' placeholder='Email' />
        <Input name='password' type='password' placeholder='Password' />

        <button type='submit'>Login</button>
        <Link to='/register'>Criar conta</Link>
      </Form>
    </>
  )
}

export default index
