import React, { useState } from "react";
import { InputCon, Label, Input, AddButton } from "./InputField.styled";
import { useSelector } from "react-redux";
import socket from "../../services/socket";

const InputFiled = () => {
	const [value, setValue] = useState("");

	const { tickers } = useSelector((state) => state.tickers);

	const handleInputValue = (e) => {
		setValue(e.currentTarget.value.toUpperCase());
	};

	const addTicker = (ticker) => {
		socket.emit("add:ticker", ticker, (res) => {
			if ("error" in res) {
				console.log("error");
			} else {
				console.log("success");
			}
		});
	};

	const handleAddTicker = (e) => {
		e.preventDefault();
		if (!value) return;
		if (tickers.some((el) => el.ticker === value)) {
			alert("This ticker is already in list!");
			return;
		}
		addTicker(value);
		setValue("");
	};

	return (
		<InputCon onSubmit={handleAddTicker}>
			<Label htmlFor='addTicker' />
			<Input id='addTicker' value={value} onChange={handleInputValue} placeholder='Add ticker...' />
			<AddButton type='submit'>ADD</AddButton>
		</InputCon>
	);
};

export default InputFiled;
