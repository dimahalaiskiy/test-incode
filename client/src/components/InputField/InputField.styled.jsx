import styled from "styled-components";

export const InputCon = styled("form")`
	margin: 20px 0px;
	display: flex;
	align-items: center;
`;

export const Label = styled("label")``;

export const Input = styled("input")`
	padding: 10px;
	border-radius: 5px;
	width: 100px;
	height: 20px;
	border: 2px solid rgba(232, 21, 255, 0.378);
	font-size: 16px;
	font-weight: 600;

	:focus {
		outline: none;
		border: 2px solid rgba(232, 21, 255, 1);
	}

	::placeholder {
		font-size: 16px;
		font-weight: 500;
	}
`;

export const AddButton = styled("button")`
	margin-left: 20px;
	height: 42px;
	width: 80px;
	border-radius: 5px;
	background-color: #fe31ba8f;
	cursor: pointer;
	outline: none;
	border: 1px solid #af4ebe;
	color: white;
	font-size: 18px;
	font-weight: 600;
`;
