var http = require('http');
let fs = require('fs');
let url = require('url');

let server = http.createServer()

server.on('request', function(request, response){
	let parametro = url.parse(request.url, true).query
	let name = parametro.nombre === undefined ? 'Programer': parametro.nombre;
	fs.readFile('index.html', 'utf-8', function(err, peticion){		
		if(err){
			response.writeHead(404, {
				'Content-Type':'text'
			})
			response.end('No existe este archivo')
		}		
		else{
			response.writeHead(200, {
				'Content-Type':'text/html; charset=utf-8'
			})
			peticion = peticion.replace('{{ nombre }}', name);
			response.end(peticion);
		}
	})
}).listen(8080);



