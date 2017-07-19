parametros para hacer un reques ajas:
url: http://localhost:3000/api/registerNumber   -- esta es la url del api
 (este es el dominio, porque se levanta aqui)
Método https: POST
Data que necesito: {"phone": "...", "terms": "..."}

url: http://localhost:3000/api/resentCode
Método https: POST
Data que necesito: {"phone": "..."}


DOCUMENTACIÓN DE JQUERY para promises

$.post("http://localhost:3000/api/registerNumber", {
 "phone": "+45848399494",
 "terms": true
}).then(function(respuesta){
	console.log(respuesta);
}).catch(function(error){
	console.log(error);
})



deferred.object()
