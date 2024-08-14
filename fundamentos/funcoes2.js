/**
 * Estudo das funções em JS
 * Funções simples
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */
 
// função simples (literais)
function hello() {
    console.log("Hello function")
}
 
// para executar uma função basta escrever o nome dela seguido de ()
hello()
//console.log(typeof(hello))
 
// função atribuída (função anônina)
const hello2 = function() {
    console.log("Hello function atribuida")
}
 
console.log(typeof(hello2))