import express from 'express'
import colecaoUf from './data/data.js'

const app = express()

app.get('/ufs', (req, res) => {
    res.json(colecaoUf)
})

app.listen(8080, () => {
    console.log('🔥 Server started at port 8080 🔥')
})