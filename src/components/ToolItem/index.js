import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { Container } from './styles';

export default function ToolItem() {
  return (
    <Container>
      <header>
        <a href='#'>Titulo</a>
        <button type='button'>
          <MdDeleteForever size={22} /> Remove
        </button>
      </header>

      <p>Description</p>

      <footer>
        <strong> #tags</strong>
        <strong> #tags</strong>
        <strong> #tags</strong>
        <strong> #tags</strong>
      </footer>
    </Container>
  );
}
