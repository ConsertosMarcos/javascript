/**
 * Carrossel de imagens 
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */
//                [0]           [1]           [2]
let slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]
let intervalo = 900 //ajuste do tempo para troca de imagem
let indice = 0 //apoio a lógica

show()

function show() {
    //setTimeout (ele gera um temporizador)
    setTimeout(() => {
        document.getElementById('slide').src = (`img/${slides[indice]}`)
    }), 300
    indice++
    if (indice === slides.length) {
        indice = 0
    }
    setTimeout(show, intervalo) // Execultar a função a cada 3s
}