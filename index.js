const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {
  const urlToFile = {
    "/": "index.html",
    "/about": "about.html",
    "/contact-me": "contact-me.html",
  };

  const filePath = urlToFile[req.url];
  const fileToSend = path.join(__dirname, filePath || "404.html");

  fs.readFile(fileToSend, (err, data) => {
    const statusCode = err ? 404 : 200;

    res.writeHead(statusCode, { "Content-Type": "text/html" });
    res.end(data || "404 Not Found");
  });
});

server.listen(8080);
