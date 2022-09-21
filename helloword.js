const http = require('http');
const html =`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>hello word</h1>
</body>
</html>`;

const server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end(html);
});

server.listen(3000); //localhost:3000