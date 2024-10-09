/**
 * assincronismo - peomise 
 * fetch
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

const imput = require('readline-sync')

console.clear()
console.log("VIA CEP")
let cep = imput.question("Digite o CEP: ")
let urlAPI = `https://viacep.com.br/ws/${cep}/json/`
//teste
console.log(urlAPI)


//uso de promise(fetch)
fetch(urlAPI)
    .then((response) => {
        return response.json()
    })
    .then((dados) => {
        console.log(dados.cep)
        console.log(dados.logradouro)
        console.log(dados.complemento)
        console.log(dados.bairro)
        console.log(dados.localidade)
        console.log(dados.uf)
    })
    .catch((erro) => {
        console.log(erro)
    })