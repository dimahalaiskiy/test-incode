import React, { useState, useEffect } from "react";
import socket from "./services/socket";
import { initializeTickers } from "./services/redux/slicers/tickerSlice";
import { useDispatch } from "react-redux";
import { Connection } from "./App.styled.jsx";
import TickerList from "./components/TickerList";
import InputFiled from "./components/InputField";

const App = () => {
	const [isConnected, setIsConnected] = useState(socket.connected);

	const dispatch = useDispatch();

	useEffect(() => {
		socket.on("connect", () => {
			setIsConnected(socket.connected);
		});
		socket.on("disconnect", () => {
			setIsConnected(false);
		});
		socket.emit("start");

		socket.on("ticker", (data) => {
			console.log(data);
			dispatch(initializeTickers(data));
		});

		return () => {
			socket.off("connect");
			socket.off("disconnect");
			socket.off("ticker");
		};
	}, [dispatch]);

	return (
		<div className='App'>
			<div className='Container'>
				<Connection isconnected={+isConnected}>Connection </Connection>
				<InputFiled />
				<TickerList />
			</div>
		</div>
	);
};

export default App;
