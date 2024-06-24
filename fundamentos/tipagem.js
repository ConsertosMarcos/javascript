/**
 * Estudos das Variaveis -  tipagem dinamicas
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

console.clear()
console.log("strings_____")
let nome = "Marcos Ryan de Almeida"
console.log(typeof(nome))
console.log(nome)
console.log("professor:" + nome) //evitar de usar este tipo de contatenação ("professor:" + nome)
console.log(`Professor: ${nome}`)
console.log("numeros___")
let peso = 70
let altura = 1.72
console.log(typeof(peso))
console.log(typeof(altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`) //ARREDONDA 2 CASAS DECIMAIS
console.log(10/0)
console.log("3" +2)
console.log("3" -2)
console.log("3" *2)
console.log("30" /2)
console.log("3x" -2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log("booleanos________________")
let sw = true
console.log(typeof(sw))