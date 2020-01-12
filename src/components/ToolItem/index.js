import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { Container } from './styles';

export default function ToolItem({ data }) {
  return (
    <Container>
      <header>
        <a href={data.link}>{data.title}</a>
        <button type='button'>
          <MdDeleteForever size={22} /> Remove
        </button>
      </header>

      <p>{data.description}</p>

      <footer>
        <strong> #tags</strong>
        {data.tags.map(tag => {
          return <strong> #{tag}</strong>;
        })}
      </footer>
    </Container>
  );
}
