const http = require("http");
const fs = require("fs");
const url = require("url");
const events = require("events");

http
	.createServer((req, res) => {
		const q = url.parse(req.url, true);
		const fileName = q.pathname !== "/" ? `.${q.pathname}.html` : "./index.html";

		fs.readFile(fileName, (err, data) => {
			if (err) {
				return notFound(req, res);
			} else {
				res.writeHead(200, { "Content-Type": "text/html" });
				res.write(data);
				return res.end();
			}
		});
	})
	.listen(8080);

function notFound(req, res) {
	fs.readFile("./404.html", (err, data) => {
		res.writeHead(404, { "Content-Type": "text/html" });
		res.write(data);
		return res.end();
	});
}
