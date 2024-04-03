const http = require("http");
const fs = require("fs");
const url = require("url");
const events = require("events");

http
	.createServer((req, res) => {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.write("Served.");
		res.end();
	})
	.listen(8080);
