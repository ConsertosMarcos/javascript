/**
 * Exemplo do uso do whitle
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

const input = require('readline-sync')
const colors = require('colors')

//variaveis
let face
let confirma = "n"

do {
    console.clear()
    console.log("Sorteo de Dados".red.bold)
    input.question("Pressione a tecla [ENTER] para jogar o DADO: ")
    face = Math.floor(Math.random() * 6 + 1)
    console.log(`Face do dado: ${face}`.blue)
    confirma = input.question("Deseja jogar Novamente(s/n): ")
} while (confirma === "s")
