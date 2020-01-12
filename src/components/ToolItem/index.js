import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdDeleteForever } from 'react-icons/md';
import Modal from '../Modal';
import { Container, RemoveModal } from './styles';
import { deleteTool } from '../../store/modules/tool/actions';

export default function ToolItem({ data }) {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  function handleModal() {
    setModal(!modal);
  }

  function handleDelete(id) {
    dispatch(deleteTool(id));
    setModal(false);
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
        {data.tags.map(tag => {
          return <strong> #{tag}</strong>;
        })}
      </footer>

      <Modal open={modal} handleModal={handleModal} label='remove'>
        <RemoveModal>
          <h2>Remove Tool</h2>
          <p>Are you sure you want to remove {data.title}? </p>
          <div>
            <button type='button' id='cancel' onClick={handleModal}>
              Cancel
            </button>
            <button
              type='button'
              id='yes'
              onClick={() => handleDelete(data._id)}
            >
              Yes
            </button>
          </div>
        </RemoveModal>
      </Modal>
    </Container>
  );
}
