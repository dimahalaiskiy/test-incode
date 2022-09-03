import React, { useState, useEffect } from "react";
import { TickerItemCon, DataCon, Ticker, Data, DeleteButton } from "./TickerItem.styled";
import dayjs from "dayjs";
import socket from "../../../services/socket";
import useModal from "../../../hooks/useModal";
import Modal from "../../Modal";
import shortTickerName from "../../../helpers/shortTickerName";

const TickerItem = (props) => {
	const { change, change_percent, exchange, last_trade_time, price, ticker } = props.ticker;
	const { isModalOpen, toggleModal } = useModal();

	const [isGrow, setIsGrow] = useState(change_percent > 0);

	const handleDeleteTicker = (ticker) => {
		socket.emit("delete:ticker", ticker, (res) => {
			if ("error" in res) {
				console.log("error");
			} else {
				console.log("success");
			}
		});
	};

	useEffect(() => {
		setIsGrow(change_percent > 0);
	}, [change_percent]);

	return (
		<TickerItemCon isgrow={+isGrow}>
			<DataCon>
				<Ticker>{shortTickerName(ticker)}</Ticker>
				<Data>{change}$</Data>
			</DataCon>
			<DataCon minwidth='120px'>
				<Ticker>{exchange}</Ticker>
				<Data>{dayjs(last_trade_time).format("DD.MM hh:mm:ss")}</Data>
			</DataCon>
			<DataCon>
				<Ticker>{price}$</Ticker>
				<Data>
					{isGrow && "+"}
					{change_percent}%
				</Data>
			</DataCon>
			<DeleteButton type='button' onClick={toggleModal}>
				<a>Delete</a>
			</DeleteButton>
			<Modal
				text='Are you sure want to delete this ticker?'
				isModalOpen={isModalOpen}
				toggleModal={toggleModal}
				handleDeleteTicker={handleDeleteTicker}
				ticker={ticker}
			/>
		</TickerItemCon>
	);
};

export default TickerItem;
