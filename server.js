import http from 'node:http'

const PORT = process.env.PORT || 1000

const server = http.createServer((req, res) => {

    if (req.url.startsWith('/login/') && req.method === 'GET') {
        
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain', 'charset=UTF-8')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.end('alenaorlova')

    } else if(req.url.startsWith('/sampl/') && req.method === 'GET') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.end(`function task(x) { return x * this * this }`)
        
    } else {
        res.statusCode = 404
        res.end('Not found')
    }
})

server.listen(PORT, () => console.log(`сервер запущен: http://localhost:${PORT}`))