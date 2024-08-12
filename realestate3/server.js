const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000

const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        createServer(async (request, response) => {
            try {
                const parsedURL = parse(request.url, true)
                const { pathname, query } = parsedURL

                switch (pathname) {
                    case '/a':
                    case '/b':
                        await app.render(request, response, pathname, query)
                        break
                    default:
                        await handle(request, response, parsedURL)
                }
            } catch (error) {
                console.error('Error occurred.', request.url, error)
                response.statusCode = 500
                response.end('Internal server error.')
            }
        }).listen(port, (error) => {
            if (error) throw error
            console.log(`> Ready on http://${hostname}:${port}`)
        })
    })
    .catch((error) => {
        if (error) throw error
    })
