import express from 'express'
import colecaoUf from './data/data.js'

const app = express()

const searchName = (ufName) => {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(ufName.toLowerCase()))
}

app.get('/ufs', (req, res) => {
    const ufName = req.query.search 
    const result = ufName ? searchName(ufName) : colecaoUf

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