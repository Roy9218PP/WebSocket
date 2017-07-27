var express = require('express')

var app = express()

app.use(express.static('static'))

var http = require('http').Server(app)

var io = require('socket.io')(http)

io.on('connection', (socket) => {

	console.log('服务端建立连接...')

	
	socket.on('msg',(data)=>{
		console.log('李四发给张三')
		console.log(data)
		io.emit(data.toUser,{content:data.content})
		
	})


//	socket.on('李四',(data)=>{
//		
//		console.log('张三发给李四')
//		console.log(data)
//		io.emit(data.toUser,{content:data.content})
//	})
	
	socket.on('disconnect', () => {
		console.log('关闭连接')
		//关闭连接
		io.close()
	})
})

http.listen(3000, () => {

	console.log('listen to 3000 port...')
})