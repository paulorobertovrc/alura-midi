function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
            elemento.play();
    } else {
        console.log('Elemento não encontrado ou seletor inválido.');
    }    
}

const listaDeTeclas = document.querySelectorAll('.tecla');

/*
let i = 0;

while (i < listaDeTeclas.length) {
    
    const tecla = listaDeTeclas[i];
    const retornaClasse = tecla.classList[1];

    tecla.onclick = function() {
        //tocaSom('#som_' + retornaClasse);
        tocaSom(`#som_${retornaClasse}`); // template string
    }
    i++;
}
*/

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const retornaClasse = tecla.classList[1];

    tecla.onclick = function() {
        tocaSom(`#som_${retornaClasse}`);
    }

    tecla.onkeydown = function(event) {
        if (event.code === 'Space' || event.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }
}
