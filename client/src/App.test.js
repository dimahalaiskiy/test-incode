import socket from "./services/socket";

describe("Tickers project", () => {
	beforeAll((done) => {
		socket.on("connect", done);
	});

	afterAll(() => {
		socket.close();
	});

	test("Initialized tickers", (done) => {
		socket.emit("start");
		socket.on("ticker", (arg) => {
			expect(arg).toHaveLength(6);
			done();
		});
	});
});
