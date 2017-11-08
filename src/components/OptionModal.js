import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal isOpen={!!props.selectedOption}
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleOK}
        closeTimeoutMS={1000}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleOK}>Okay</button>
    </Modal>
        );

export default OptionModal;
