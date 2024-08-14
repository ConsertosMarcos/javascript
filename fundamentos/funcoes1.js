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
const hello2 = function () {
    console.log("Hello function atribuida")
}

//console.log(typeof (hello2))

//funçao atribuida simplificada
const hello3 = () => { 
    console.log("Hello arrow function")
}

hello3()

//funçao atribuida simplificada (arrow function) 1 linha de codigo
const hello4 = _ => console.log("Hello arrow function one line")

hello4()