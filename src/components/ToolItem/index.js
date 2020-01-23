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
        <a href={data.link} data-testid='link-title'>
          {data.title}
        </a>
        <button
          type='button'
          data-testid='remove-btn'
          onClick={e => setModal(!modal)}
        >
          <MdDeleteForever size={22} /> Remove
        </button>
      </header>

      <p data-testid='tool-desc'>{data.description}</p>

      <footer>
        {data.tags.map(tag => {
          return <strong key={tag}> #{tag}</strong>;
        })}
      </footer>

      <Modal open={modal} handleModal={handleModal} label='remove'>
        <RemoveModal data-testid='remove-modal'>
          <h2>Remove Tool</h2>
          <p>Are you sure you want to remove {data.title}? </p>
          <div>
            <button
              type='button'
              id='cancel'
              onClick={handleModal}
              data-testid='cancel-btn'
            >
              Cancel
            </button>
            <button
              type='button'
              id='yes'
              onClick={() => handleDelete(data._id)}
              data-testid='yes-btn'
            >
              Yes
            </button>
          </div>
        </RemoveModal>
      </Modal>
    </Container>
  );
}
