import http from 'node:http'

const PORT = process.env.PORT || 1000

const server = https.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('X-Author', 'alenaorlova')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.end('alenaorlova')
})

server.listen(PORT, () => console.log(`сервер запущен: http://localhost:${PORT}`))