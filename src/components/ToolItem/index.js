import React, { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import Modal from '../Modal';
import { Container, RemoveModal } from './styles';

export default function ToolItem({ data }) {
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(!modal);
  }

  return (
    <Container>
      <header>
        <a href={data.link}>{data.title}</a>
        <button type='button' onClick={e => setModal(!modal)}>
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

      <Modal open={modal} handleModal={handleModal} label='remove'>
        <RemoveModal>
          <h2>Remove Tool</h2>
          <p>Are you sure you want to remove {data.title}? </p>
          <div>
            <button id='cancel' onClick={handleModal}>
              Cancel
            </button>
            <button id='yes'>Yes</button>
          </div>
        </RemoveModal>
      </Modal>
    </Container>
  );
}
