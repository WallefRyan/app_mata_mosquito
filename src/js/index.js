
var altura = 0
var largura = 0

//Funçao para ajustar a tela quando o usuario quiser redimencionar a jantela (Utilizar a função na tag body)
function ajusteTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajusteTamanhoPalcoJogo()


function posicaoRandomica(){
    //Fazer o Mosquito se mover de forma randomico (aleatorio) em conforme com o ajuste de palco sem estourar a pagina
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    //Se as posições conhecidirem com zero (CORREÇÃO) - Aplicando controle retirando a possifilidade de posicoes negativa
    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //Cria o elemento HTML de forma dinamica e incluindo esse elemento no Body da Pagina
    var mosquito = document.createElement('img')
    mosquito.src = 'src/img/mosca.png'
    mosquito.className = tamanhoAleatorio()
    // forma a cordenada em pixel
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'

    document.body.appendChild(mosquito)

}

function tamanhoAleatorio() {
    //Cria 3 classes de 0 a 2 para ajustar-mos o tamanho
    var classe = Math.floor(Math.random() * 3 )
    console.log(classe)

    switch(classe){
        case 0:
            return "mosquito1"
        case 1:
            return "mosquito2"
        case 2:
            return "mosquito3"
        default:
    }
}