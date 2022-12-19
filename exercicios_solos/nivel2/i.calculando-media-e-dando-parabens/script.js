function clicar(){
    var nota1 = document.getElementById('txtmed');
    var nota2 = document.getElementById('txtmed2');

    var num1 = Number(nota1.value) 
    var num2 = Number(nota2.value)
    var media = Number((num1 + num2)/2)  

    var txtres = document.getElementById('para')
    var nome = document.getElementById('nomealuno')
    txtres.innerHTML = `Olá ${nome.value} a sua média final é ${media}`
    
    if(media <= 5){
        txtres.innerHTML += `<br>Estude mais!`
    }else{
        txtres.innerHTML += `<br><p>PARABÉNS<p>`
    };
    
    
}