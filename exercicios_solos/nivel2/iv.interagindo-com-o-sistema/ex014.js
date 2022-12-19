function mostrar(){
    var sistema = new Date()
    var pa = document.getElementById('paragrafo')
    pa.innerHTML= `Recebemos do seu sistema as seguintes informações: <mark>${sistema}</mark>`
}