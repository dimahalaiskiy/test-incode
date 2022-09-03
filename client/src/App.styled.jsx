import styled from "styled-components";

export const Connection = styled("div")`
	font-size: 18px;
	font-weight: 500;
	::after {
		display: inline-block;
		content: "";
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background-color: ${({ isconnected }) => (isconnected ? `rgb(74, 255, 132)` : `rgb(255, 74, 74)`)};
	}
`;
