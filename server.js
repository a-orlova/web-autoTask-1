import http from 'node:http'

const PORT = process.env.PORT || 1000

const server = http.createServer((req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*')

    if (req.url.startsWith('/login/') && req.method === 'GET') {
        
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=UTF-8')
        res.end('alenaorlova')

    } else if(req.url.startsWith('/sample/') && req.method === 'GET') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=UTF-8')
        res.end(`function task(x) { return x * this * this }`)

    } else if(req.url.startsWith('/promise/') && req.method === 'GET') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain; charset=UTF-8')
        res.end(`function task(x){
                    return new Promise((resolve, reject) => {
                        if (x < 18) resolve('yes')
                        else reject('no')
                    })
                }`)

    } else if (req.url.startsWith('/fetch/') && req.method === 'GET') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'text/html; charset=UTF-8')
        res.end(`<!DOCTYPE html>
                    <html>

                    <body>
                        <input type="text" id="inp">
                        <button id="bt">отправить</button>

                        <script>
                            document.getElementById('bt').addEventListener('click', async () => {
                                const inputEl = document.getElementById('inp')
                                const url = inputEl.value
                                const res = await fetch(url)
                                const data = await res.text()
                                inputEl.value = data
                            })
                        </script>
                    </body>
                    </html>`)

    } else {
        res.statusCode = 404
        res.end('Not found')
    }
})

server.listen(PORT, () => console.log(`сервер запущен: http://localhost:${PORT}`))