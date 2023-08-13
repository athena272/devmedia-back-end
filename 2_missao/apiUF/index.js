import express from 'express'
import colecaoUf from './data/data.js'

const app = express()

app.get('/ufs', (req, res) => {
    res.json(colecaoUf)
})

app.get('/ufs/:id', (req, res) => {
    const idUF = parseInt(req.params.id)
    let uf
    let errorMessage = 'Invalid request'

    if (!(isNaN(idUF))) {
        uf = colecaoUf.find(uf => uf.id === idUF)

        if (!uf) {
            errorMessage = 'UF not found'
        }
    }

    if (uf) {
        res.json(uf)
    } else {
        res.status(404).send({ 'error': errorMessage })
    }
})


app.listen(8080, () => {
    console.log('🔥 Server started at port 8080 🔥')
})