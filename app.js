const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      '<form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form>'
    );
    return res.end();
  }

  if (url === "/message" && method === "POST") {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        });
        req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString()
            const message = parsedBody.split("=")[1]
            console.log(message);
            fs.writeFileSync("./message.txt", message);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            return res.end();
        })
    }
//   console.log(req.url, req.method, req.headers);
//   res.write(
//     "<html><head><title>My First Page</title></head><body><h1>Hello from my node.js server!</h1></body></html>"
//   );
});

server.listen(3000);
