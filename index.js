let http = require ("http")
let servidor= http.createServer(function(peticion, respuesta){//crea el servidor
respuesta.writeHead(200, {"content-type":"text/html;charset=utf-8"})//200 es el num de respuesta, el tipo de conte nido es html
respuesta.write("<h3>SERVER BÁSICO CON NODE.JS</h3>")//El mensaje que muestra el servidor
console.log("peticion web")
respuesta.end()
})


servidor.listen(3000)//El servidor que esta escuchando y atendiendo es el 3000 en este caso
console.log("Ejecutando un server local con node.js")