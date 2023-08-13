import colecaoUf from '../data/data.js'

function searchUFs() {
    return colecaoUf
}

function searchByName(ufName) {
    return colecaoUf.filter(uf => uf.nome.toLowerCase().includes(ufName.toLowerCase()))
}

function searchById(ufId) {
    return colecaoUf.find(uf => uf.id === ufId)
}

export { searchUFs, searchByName, searchById }