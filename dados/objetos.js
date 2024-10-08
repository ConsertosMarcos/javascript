/**
 * Estrutura de Dados Objetos
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

const funcionario1 = {}
console.log(typeof (funcionario1))
//adicionar dados
funcionario1.nome = "Marcos"
funcionario1.cargo = "Professor"
funcionario1.email = "seuemail@gmail.com"
funcionario1.salario = 8000
funcionario1.insta = "@marcos._.ryan"

//listar dados
console.log(funcionario1)
console.log(funcionario1.cargo)
//modificar dados
funcionario1.nome = "Marcos Ryan"
console.log(funcionario1)

//excluir dados

delete funcionario1.insta
console.log(funcionario1)


const funcionario2 = {
    nome: "Marcos",
    cargo: "T.I",
    email: "seuemail@gmail.com",
    salario: 100000
}
console.log(funcionario2)

const endereco1 = {
    logradoura: "Bat caverna",
    cidade: "Gothan City",
    estado: "New Jersey"
}
console.log(endereco1)

const funcionario3 = {
    nome: "Alfred",
    cargo: "mordomo",
    email: "seuemail.com",
    salario: 20000,
    ...endereco1
}
console.log(funcionario3)

const funcionario4 = {
    nome: "Dick",
    cargo: "acrobata",
    email: "seuemail.com",
    salario: 2000,
    ...endereco1
}
console.log(funcionario4)

const funcionario5 = {
    nome: "tonny stark",
    cargo: "engenheiro",
    email: "seuemail.com",
    salario: 375000,
    armadura: {
        versao: "Mark II",
        ano: 2010,
        reator: "Ark 01"
    },
    switUp: () => {
        console.log("🤖")
    }
}
console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.armadura.versao)
console.log(funcionario5.switUp())
