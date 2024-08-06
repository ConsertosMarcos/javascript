/**
 * Calculo do Imc
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

const colors = require('colors')
const input = require('readline-sync')

//Variaveis
let nome, idade, peso, altura, imc

console.clear()

console.log(" ___ __  __  ___ ")
console.log("|_ _|  \\/  |/ __|")
console.log(" | || |\\/| | (__ ")
console.log("|___|_|  |_|\\___|")
console.log("")
//entrada
nome = input.question("Digite seu nome: ")
idade = Number(input.question("Digite sua Idade: "))
peso = Number(input.question("Digite seu peso em kg: ").replace(",", "."))
altura = Number(input.question("Digite sua altura em cm: "))

//processamento
imc = peso / ((altura / 100) * (altura / 100))

//saida
console.log("")
console.log("-------------------------------------------")
console.log("Ficha do Aluno".italic.bold)
console.log(`Nome: ${nome}`)
console.log(`idade: ${idade}`)
console.log(`peso: ${peso}`)
console.log(`altura: ${altura}`)
console.log(`Média: ${imc.toFixed(2)}`)
if (imc < 18.5) {
    console.log("Abaixo do peso".cyan)
} else if (imc < 25) {
    console.log("Peso Normal".green)
} else if (imc < 30) {
    console.log("Acima do peso".yellow)
} else if (imc < 35) {
    console.log("Obesidade I".yellow.bold)
} else if (imc < 40) {
    console.log("Obesidade II".red)
} else {
    console.log("Obesidade III (Mórbida)".red.bold)
}
console.log("")
console.log("-------------------------------------------")