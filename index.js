var app = require('express')()
var server = require('http').Server(app)
var io = require('socket.io')(server)
var Q = 0




//admin
app.get('/', function(req, res) {
	res.sendfile('root/index.html')
})

io.on('connection', function(socket){

	// data.send(Q + " Ke Counter / Teller NO " )
	console.log("Connection Berhasil")
	socket.on('msg', function(data) {
		console.log(data)
		io.sockets.emit('newmsg', data);
	})
})



//console.log("server jalan");
server.listen(8081)