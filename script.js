function add (valor){
    document.getElementById('pantalla').value += valor
}

function cancel (){
    document.getElementById('pantalla').value = ('')
}


function result() {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado

}