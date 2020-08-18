const http = require('http')

const server = http.createServer()

server.on('connection', (socket) => {
    console.log('My new connection')
})

//start the server listening on port 3000
server.listen(3000)
console.log('Listening on port 3000')


//real life implementation using req and res

const realServer = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World')
        res.end()
    }
    if (req.url === '/api/count') {
        res.write(JSON.stringify([1,2,3,4,5]))
        res.end()
    }
})

realServer.listen(5555)
console.log('Real Server listening on port 5555')

