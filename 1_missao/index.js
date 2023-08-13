let date = new Date()

let hour = date.getHours()
let min = date.getMinutes()

let saudacao = 'Bom dia'

if (hour <= 17 && hour >= 11) {
    saudacao = 'Boa tarde'
}

if (hour > 17) {
    saudacao = 'Boa noite'
}

console.log(
`Hoya!, ${saudacao}
Agora são ${hour}:${min}`
)