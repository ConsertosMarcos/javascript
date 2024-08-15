/**
 * CALCULADORA
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

//Importaçao de Biblioteca
const input = require('readline-sync')
const colors = require('colors')

//Variaveis
let num1, num2, operacao

//variavel funcao
let somar = (num1, num2) => console.log(`${num1} + ${num2} = ${num1 + num2}`)
let Subtrair = (num1, num2) => console.log(`${num1} - ${num2} = ${num1 - num2}`)
let Multiplicar = (num1, num2) => console.log(`${num1} x ${num2} = ${num1 * num2}`)
let Dividir = (num1, num2) => console.log(`${num1} / ${num2} = ${num1 / num2}`)
let Porcentagem = (num1, num2) => console.log(`${num1} % ${num2} = ${(num1 * num2) / 100}`)

do {
    console.clear()
    console.log(" _____   ___   _     _____ _   _ _       ___ ______ ___________  ___  ".red.bold)
    console.log("/  __ \\ / _ \\ | |   /  __ \\ | | | |     / _ \\|  _  \\  _  | ___ \\/ _ \\ ".red.bold)
    console.log("| /  \\// /_\\ \\| |   | /  \\/ | | | |    / /_\\ \\ | | | | | | |_/ / /_\\ \\".red.bold)
    console.log("| |    |  _  || |   | |   | | | | |    |  _  | | | | | | |    /|  _  |".red.bold)
    console.log("| \\__/\\| | | || |___| \\__/\\ |_| | |____| | | | |/ /\\ \\_/ / |\\ \\| | | |".red.bold)
    console.log(" \\____/\\_| |_/\\_____/\\____/\\___/\\_____/\\_| |_/___/  \\___/\\_| \\_\\_| |_/".red.bold)

    //entrada
    num1 = Number(input.question('Digite o primeiro numero: '))
    console.log("1. ➕")
    console.log("2. ➖")
    console.log("3. ✖️")
    console.log("4. ➗")
    console.log("5. %")
    operacao = Number(input.question("Digite a opcao desejada: "))
    num2 = Number(input.question('Digite o segundo numero: '))
    console.log("")
    
    switch (operacao) {
        case 1:
            somar(num1, num2)
            break
        case 2:
            Subtrair(num1, num2)
            break
        case 3:
            Multiplicar(num1, num2)
            break
        case 4:
            Dividir(num1, num2)
            break
        case 5:
            Porcentagem(num1, num2)
            break
    }
    confirma = input.question("Deseja Calcular Novamente(s/n): ")
} while (confirma === "s")
