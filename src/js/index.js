
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
    posicaoX = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //Cria o elemento HTML de forma dinamica e incluindo esse elemento no Body da Pagina
    var mosquito = document.createElement('img')
    mosquito.src = 'src/img/mosca.png'
    mosquito.className = 'mosquito1'
    // forma a cordenada em pixel
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)

}