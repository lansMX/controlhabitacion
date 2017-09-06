let http = require('http');
let fs = require('fs')

let server = http.createServer()

server.on('request', function (enviamos, responde){
	fs.readFile('index.html', function (err, data){
		if (err) throw err;
		responde.writeHead(200, {
			'Content-type': 'text/html; charset=utf-8'
		})
		responde.end(data);
	})
}).listen(8080);


