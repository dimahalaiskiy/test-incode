import { useState } from "react";

const useModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const toggleModal = () => {
		setIsModalOpen(!isModalOpen);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	return {
		isModalOpen,
		toggleModal,
		closeModal,
		openModal,
	};
};

export default useModal;
