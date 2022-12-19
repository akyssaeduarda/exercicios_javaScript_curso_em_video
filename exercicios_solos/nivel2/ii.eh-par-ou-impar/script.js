let numero = window.document.getElementById('numero')
let pa = document.getElementById('paragrafo')

function descobrir(){
    num = Number(numero.value)
   
  
     if ( num % 2 == 0){
        pa.innerHTML = `É um número par!`
    }else{
        pa.innerHTML = `É um número impar!`
    };
}