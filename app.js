const http = require("http")

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    res.write("<html><head><title>My First Page</title></head><body><h1>Hello from my node.js server!</h1></body></html>")
})

server.listen(3000)

