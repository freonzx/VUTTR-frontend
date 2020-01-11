import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Logo from '../../assets/images/Logo.svg';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    // console.tron.log(data);
    dispatch(signInRequest(email, password));
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('* Insira um e-mail valido')
      .required('* E-mail obrigatório'),
    password: Yup.string()
      .min(6)
      .required('* Senha obrigatória'),
  });

  return (
    <>
      <img src={Logo} alt='logo' />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name='email' type='email' placeholder='Email' />
        <Input name='password' type='password' placeholder='Password' />

        <button type='submit'>{loading ? 'Loading...' : 'Login'}</button>
        <Link to='/register'>Criar conta</Link>
      </Form>
    </>
  );
}
