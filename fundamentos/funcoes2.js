/**
 * Estudo das funções com parametros em JS
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

//IMORTANTE !!! Funçoes atribuidas obrigatoriamente precisam ser criadas no inicio do codigo (antes de serem execultadas)

function somar(num1, num2) {
    return (console.log(num1 + num2))
}

somar(2, 5)

//funçao atribuida (funçao anonima) com parametros
let somarAtribuida = function (num1, num2) {
    return (console.log(num1 + num2))
}

somarAtribuida(10, 6)

//funçao atribuida simplificada(arrow function)  com parametros

let somarAF = (num1, num2) => {
    return (console.log(num1 + num2))
}

somarAF(8, 5)

//funçao atribuida simplificada (arrow function) com parametros 1 linha de codigo (besre caso o return é implicito)
let somarAFS = (num1, num2) => console.log(num1 + num2)

somarAFS(9, 5)