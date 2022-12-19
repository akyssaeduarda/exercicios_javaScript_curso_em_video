let contador = 0;
let pa = document.getElementById('paragrafo')
function contar(){
    contador ++
    pa.innerHTML = `Você clicou ${contador} vezes`
};
function zerar(){
    contador = 0
    pa.innerHTML = null;
}