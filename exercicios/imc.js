/**
 * Calculo do Imc
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

const colors = require('colors')
const input = require('readline-sync')

//Variaveis
let nome, idade, peso, altura, Imc
consle.clear()

console.log(" ___ __  __  ___ ")
console.log("|_ _|  \\/  |/ __|")
console.log(" | || |\\/| | (__ ")
console.log("|___|_|  |_|\\___|")
console.log("")
//entrada
nome = input.question("Digite seu nome: ")
idade = Number(input.question("Digite sua Idade: "))
peso = Number(input.question("Digite seu peso em kg: ").replace(",","."))
altura = Number(input.question("Digite sua altura em cm: ").replace(",","."))

//saida
