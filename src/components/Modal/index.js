import React from 'react';

import Modal from 'react-modal';

import { customStyles } from './styles';

const ReactModal = ({ open, handleModal, children, label }) => {
  return (
    <Modal
      isOpen={open}
      contentLabel={label}
      style={customStyles}
      onRequestClose={() => handleModal()}
      ariaHideApp={false}
    >
      {children}
    </Modal>
  );
};

export default ReactModal;
