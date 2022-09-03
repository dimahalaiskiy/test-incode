import React from "react";
import { ModalCon, ModalContent, ModalButtonCon, Button } from "./Modal.styled";

const Modal = ({ text, handleDeleteTicker, ticker, isModalOpen, toggleModal }) => {
	return (
		<ModalCon ismodalopen={isModalOpen} onClick={toggleModal}>
			<ModalContent onClick={(e) => e.stopPropagation()}>
				<p>{text}</p>
				<ModalButtonCon>
					<Button type='button' onClick={() => handleDeleteTicker(ticker)}>
						Delete
					</Button>
					<Button type='button' onClick={toggleModal}>
						Close
					</Button>
				</ModalButtonCon>
			</ModalContent>
		</ModalCon>
	);
};

export default Modal;
