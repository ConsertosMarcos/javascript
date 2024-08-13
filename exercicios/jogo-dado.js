/**
 * Tigrinho do Senac
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

const input = require('readline-sync')
const colors = require('colors')

//variaveis
let face

console.clear()
console.log("Sorteo de Dados".red.bold)
input.question("Pressione a tecla [ENTER] para jogar o DADO: ")

//sorteio da face de um dado
//math(classe matematica)
//floor(conversao para numeros inteiros)
//gandom() * 6 (gerador de numeros aleatorios 0 1 2 3 4 5)
face = Math.floor(Math.random() * 6 + 1)
console.log(`Face do dado: ${face}`.blue)

//Sida
switch (face) {
    case 1:
        console.log("⚀")
        break
    case 2:
        console.log("⚁")
        break
    case 3:
        console.log("⚂")
        break
    case 4:
        console.log("⚃")
        break
    case 5:
        console.log("⚄")
        break
    case 6:
        console.log("⚅")
        break
}
