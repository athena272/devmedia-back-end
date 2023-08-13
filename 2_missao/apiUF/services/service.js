import colecaoUf from '../data/data.js'

function search() {
    return colecaoUf
}

function searchByName(ufName) {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(ufName.toLowerCase()))
}

function searchById(ufId) {
    return colecaoUf.find(uf => uf.id === ufId)
}

export { search, searchByName, searchById }