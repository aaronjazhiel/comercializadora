'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3678;


mongoose.connect('mongodb://13.58.210.131:9000/cursofavoritos', (err, res) => {
	if(err){
		throw err;
	}else{
		console.log('Conexión a MongoDB correcta');
		app.listen(port, function(){
			console.log("API REST FAVORITOS funcionando en http://localhost:"+port);
		});
	}

});

