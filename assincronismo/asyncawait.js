/**
 * assincronismo
 * asynk - await
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

//bibliteca interna do js para lidar com arquivos 
const fs = require('fs')

async function criararquivo() {
    let conteudo = 'Marcos ryan de almeida'
    await gravaraqruivo("teste.txt", conteudo)
}
async function gravaraqruivo(path, conteudo) {
    try {
        await fs.promises.writeFile(path, conteudo)
        console.log("Arquivo gravando com sucesso")
    } catch (error) {
        console.log(error)
    }
}

console.clear()
criararquivo()