var express = require('express')

var app = express()

app.use(express.static('static'))

var http = require('http').Server(app)

var io = require('socket.io')(http)

io.on('connection', (socket) => {

	console.log('服务端建立连接...')

	setInterval(() => {

		//服务端主动响应客户端，并且传递数据
		//io.emit('msg',{content:"Hello Boy"})

	}, 3000)

	socket.on('hello', (data) => {

		console.log(data)
	})

	socket.on('disconnect', () => {
		console.log('关闭连接')
		//关闭连接
		io.close()
	})
})

http.listen(3000, () => {

	console.log('listen to 3000 port...')
})