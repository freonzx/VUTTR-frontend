import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Container } from './styles';
import { createTool } from '../../store/modules/tool/actions';

const schema = Yup.object().shape({
  title: Yup.string().required('* Titulo obrgatório'),
  link: Yup.string().required('* Link obrigatório'),
  description: Yup.string('* Campo obrigatório')
    .max(255)
    .required('* Limite maximo de caracteres 255'),
  tags: Yup.string().required('* Campo obrigatório'),
});

const FormAdd = ({ handleModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = ({ title, link, tags, description }, { resetForm }) => {
    const tagsArray = tags.replace(/\s/g, '').split(',');
    dispatch(createTool({ title, link, description, tags: tagsArray }));
    resetForm();
    handleModal();
  };

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit}>
        <h2>Add New Tool</h2>
        <label htmlFor='title'>Tool Title</label>
        <Input name='title' />
        <label htmlFor='link'>URL</label>
        <Input name='link' />
        <label htmlFor='description'>Description</label>
        <Input multiline rows='6' name='description' />
        <label htmlFor='tags'>Tags</label>
        <Input
          name='tags'
          type='text'
          placeholder='ex: node, react, react native'
        />
        <div className='button'>
          <button type='submit'>Enviar</button>
        </div>
      </Form>
    </Container>
  );
};

FormAdd.propTypes = {
  handleModal: PropTypes.func.isRequired,
};

export default FormAdd;
