precio = 400000


precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerText = precio
valorText = document.querySelector(".cantidad")
textTotalaPagar = document.querySelector(".valor-total")
function sumar(){
    var valorNum = parseInt(valorText.innerText)
    valorText.innerText = valorNum + 1
    textTotalaPagar.innerText = precio * parseInt(valorText.innerText)
}
function restar(){
    var valorNum = parseInt(valorText.innerText)
    if(valorNum > 0){
        valorText.innerText = valorNum - 1
        textTotalaPagar.innerText = precio * parseInt(valorText.innerText)
    }


}
