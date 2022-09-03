import styled from "styled-components";

export const ModalCon = styled("div")`
	display: ${({ ismodalopen }) => (ismodalopen ? "block" : "none")};
	position: fixed;
	z-index: 1;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled("div")`
	position: absolute;
	z-index: 2;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 300px;
	text-align: center;
	background-color: rgba(33, 255, 55, 0.2);
	border-radius: 5px;
	box-shadow: 24px;
	padding: 30px;
	color: white;
`;

export const ModalButtonCon = styled("div")`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Button = styled("button")`
	cursor: pointer;
	outline: none;
	border: 1px solid gray;
	border-radius: 5px;
	width: 50px;
	height: 30px;
	background-color: white;
	margin-right: 30px;
`;
