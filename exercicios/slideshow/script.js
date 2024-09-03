/**
 * Carrossel de imagens 
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */
//                [0]           [1]           [2]
let slides = ["slide1.jpg", "slide2.jpg", "slide3.jpg"]
let intervalo = 2500 //ajuste do tempo para troca de imagem
let indice = 0 //apoio a lógica

show()

function show() {
    //a linha abaixo add a class fadeOut ao documento HTML na tag inentificada como slide
    document.getElementById('slide').className += 'fadeOut'
    //setTimeout (ele gera um temporizador)
    setTimeout(() => {
        document.getElementById('slide').src = (`img/${slides[indice]}`)
        document.getElementById('slide').className = ''
    }, 800) //trocar a cada 1s (1000 = 1s)
    indice++
    if (indice === slides.length) {
        indice = 0
    }
    setTimeout(show, intervalo) // Execultar a função a cada 3s
}