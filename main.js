function tocaSomPom(IdElementoAudio){
    document.querySelector(IdElementoAudio).play()
}

const ListaDeTeclas = document.querySelectorAll('.tecla')

ListaDeTeclas[0].onclick = TocaSomPom

let contador = 0

while(contador < ListaDeTelcas.lenght){
    ListaDeTeclas[contador].onclick = function (){
        TocaSom('#som_tecla_pom')
    }
    contador = contador + 1
    console.log(contador)
}