const http = require("node:http");

let server = http.createServer((req, res) => {
    const html = "<html>" + "<head>" + "</head>" + "<body>" + "<h1>Servidor</h1>" + "</body>" + "</html>"
    res.end(html);

});

server.listen(4500, () => {
    console.log("api iniciada");
});