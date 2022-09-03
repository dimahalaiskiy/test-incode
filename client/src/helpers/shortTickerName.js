const shortTickerName = (tickerName) => {
	if (tickerName.length > 5) {
		return `${tickerName.split("").splice(0, 4).join("")}...`;
	}
	return tickerName;
};

export default shortTickerName;
