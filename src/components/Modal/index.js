import React from 'react';
import PropTypes from 'prop-types';

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

ReactModal.propTypes = {
  open: PropTypes.bool.isRequired,
  handleModal: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default ReactModal;
