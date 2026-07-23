
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end("OkuPaylas Backend Çalışıyor 🚀");
});

server.listen(3000, () => {
  console.log("Sunucu 3000 portunda çalışıyor.");
});
