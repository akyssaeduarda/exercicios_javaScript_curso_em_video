function iniciar(){
    let pa = document.getElementById('paragrafo');
    let sistema = new Date();
    let dia = sistema.getDate();
    let mes = sistema.getMonth();
    let ano = sistema.getFullYear();
    let diasem = sistema.getDay();
    let hora = sistema.getHours();
    let minuto = sistema.getMinutes();
    let segundos= sistema.getMilliseconds();

    pa.innerHTML = `dia: <mark>${dia}</mark>`
    pa.innerHTML += `<br> mes: <mark>${mes}</mark>`
    pa.innerHTML += `<br> ano: <mark>${ano}</mark>`
    pa.innerHTML += `<br> dia da semana: <mark>${diasem}</mark>`
    pa.innerHTML += `<br> hora: <mark>${hora}</mark>`
    pa.innerHTML += `<br> minutos: <mark>${minuto}</mark>`
    pa.innerHTML += `<br> segundos: <mark>${segundos}</mark>`


}