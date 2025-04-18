const {importantData, baseHTML} = require('./data.js')
const data = importantData()
const http = require('node:http')
const server = http.createServer((req, res) => {
    res.end(baseHTML()+`
        <h1>${data.title}</h1>
        <h3>${data.subtitle}</h3>
        <p>${data.description}</p>
        `+'</body></html>')
})

server.listen(0, () => {
    console.log('Server listening on port '+server.address().port)
})