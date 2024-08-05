/**
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

//variaveis
let idade

//importar a biblioteca
const imput = require('readline-sync')

console.clear()

//entrada
idade = Number (imput.question('Digite sua Idade: '))
//processamento:
if(idade < 16) {
    console.log("Voto Proibido")
} else if (idade  === 16 || idade === 17 || idade > 70) {
    console.log('Voto Facultativo')
} else {
    console.log('Voto Obigatorio')
}