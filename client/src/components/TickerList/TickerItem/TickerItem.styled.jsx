import styled from "styled-components";

export const TickerItemCon = styled("li")`
	position: relative;
	background-color: ${({ isgrow }) => (isgrow ? `rgba(160, 246, 209, 0.227) ` : `rgba(246, 142, 137, 0.227)`)};
	width: 300px;
	height: 50px;
	border-radius: 8px;
	border: ${({ isgrow }) =>
		isgrow ? ` 1px solid rgba(160, 246, 207, 0.775)` : `1px solid rgba(246, 169, 160, 0.775)`};
	margin-right: 40px;
	margin-bottom: 20px;
	display: flex;
`;

export const DataCon = styled("div")`
	min-width: ${({ minwidth }) => minwidth || "77px"};
	display: flex;
	flex-direction: column;
	align-items: stretch;
	justify-content: center;
	font-size: 14px;
	font-weight: 600;
`;

export const Ticker = styled("div")`
	display: flex;
	justify-content: left;
	align-items: center;
	font-size: 16px;
	font-weight: 600;
	margin-left: 10px; ;
`;

export const Data = styled("div")`
	display: flex;
	justify-content: left;
	align-items: center;
	margin-left: 10px;
	font-size: 14px;
	font-weight: 500;
`;

export const DeleteButton = styled("button")`
	position: relative;
	display: block;
	cursor: pointer;
	min-width: 18px;
	height: 50px;
	border-radius: 5px;
	background-color: white;
	border: 1px solid white;
	font-weight: 600;
	padding: 0;
	margin-left: 7px;
	margin-right: 4px;
	a {
		position: absolute;
		text-transform: none;
		color: black;
		top: 17px;
		left: -10px;
		font-size: 12px;
		transform: rotate(90deg);
		font-weight: 400;
	}
`;
