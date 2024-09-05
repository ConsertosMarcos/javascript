/**
 * App Flex JS
 * @author Marcos Ryan
 * @link https://www.youtube.com/channel/UCiVuxdmrUV0yysFFzuHoOYg
 */

let etanol, gasolina
function calcular(params) {
    etanol = frmFlex.inputEtanol.value
    gasolina = frmFlex.inputGasolina.value
    if (etanol < 0.7 * gasolina) {
        document.getElementById('status').src = "img/etanol.png"
    } else {
        document.getElementById('status').src = "img/gasolina.png"
    }
    return false
}