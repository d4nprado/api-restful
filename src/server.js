const express = require('express')
const cors = require('cors')

const db = require('./database/db.js')
const routes = require('./routes/routes')

const app = express()

// conexão com o banco de dados
db.connect()

// habilita CORS

const allowedOrigins = [
    'http://127.0.0.1:5500',
    'http://www.app.com.br'
]

app.use(cors({
    origin: function(origin, callback) {
        let allowed = true

        if(!origin) allowed = true

        if(!allowedOrigins.includes(origin)) allowed = false

        callback(null, allowed)
    }
}))

//app.use(cors())

// habilita server para receber dados via json
app.use(express.json())

// definindo as rotas
app.use('/api', routes)

// executando o servidor
const port = process.env.PORT || 8080
app.listen(port, () => console.log(`Server is listening on port ${port}`))