import express from 'express'
import { searchUFs, searchByName, searchById } from './services/service.js'

const app = express()

app.get('/ufs', (req, res) => {
    const ufName = req.query.search
    const result = ufName ? searchByName(ufName) : searchUFs()

    if (result.length > 0) {
        res.json(result)
    } else {
        res.status(404).send({ 'error': `No UF find with the name ${ufName}` })
    }
})

app.get('/ufs/:id', (req, res) => {
    const idUF = parseInt(req.params.id)
    let uf
    let errorMessage = 'Invalid request'

    if (!(isNaN(idUF))) {
        uf = searchById(idUF)
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