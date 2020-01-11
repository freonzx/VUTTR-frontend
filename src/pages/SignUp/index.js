import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Logo from '../../assets/images/Logo.svg';
import { signUpRequest } from '../../store/modules/auth/actions';

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    // console.tron.log(data);
    dispatch(signUpRequest(name, email, password));
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .email('* Insira um e-mail valido')
      .required('* E-mail obrigatório'),
    password: Yup.string()
      .min(6, '* Senha precisa conter no minimo 6 caracteres')
      .required('* Senha obrigatória'),
    name: Yup.string().required('* Insira seu nome completo'),
  });

  return (
    <>
      <img src={Logo} alt='logo' />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name='name' type='text' placeholder='Nome Completo' />
        <Input name='email' type='email' placeholder='Email' />
        <Input name='password' type='password' placeholder='Password' />

        <button type='submit'>Criar Conta</button>
        <Link to='/login'>Já tenho conta</Link>
      </Form>
    </>
  );
}
