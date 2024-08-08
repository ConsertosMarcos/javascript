/**
 * Jogo do Jokenpow
 * @author Marcos Ryan
 * @author Isaque Medeiros
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

const colors = require('colors')
const input = require('readline-sync')

//varieveis
let pedra, papel, tesoura, resultado


console.clear()
console.log("   ___  _____ _   __ _____ _   _ ______ _____  _    _ ")
console.log("  |_  ||  _  | | / /|  ___| \\ | || ___ \\  _  || |  | |")
console.log("    | || | | | |/ / | |__ |  \\| || |_/ / | | || |  | |")
console.log("    | || | | |    \\ |  __|| . ` ||  __/| | | || |/\\| |")
console.log("/\\__/ /\\ \\_/ / |\\  \\| |___| |\\  || |   \\ \\_/ /\\  /\\  /")
console.log("\\____/  \\___/\\_| \\_/\\____/\\_| \\_/\\_|    \\___/  \\/  \\/ ")

//processamento do jogador
console.log("1. Pedra")
console.log("2. Papel")
console.log("3. Tesoura")
input.question("Digite a opcao desejada: ")
console.log("______________________________________")

if (pedra = 1) {
    console.log("Jogador escolheu Pedra")
} else if (papel == 2) {
    console.log * ("Papel")
}




//Processamento aleatorio do computador
resultado = Math.floor(Math.random() * 3 + 1)
switch (resultado) {
    case 1:
        console.log("Computador escolheu Pedra")
        break
    case 2:
        console.log("Computador escolheu Papel")
        break
    case 3:
        console.log("Computador escolheu Tesoura")
        break
}

