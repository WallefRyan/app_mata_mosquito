
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15 

var criaMosquitoTempo = 1500

//Definindo o nivel do Jogo
var nivel = window.location.search
nivel = nivel.replace('?','')

if(nivel === 'facil'){
    //1500
    criaMosquitoTempo = 1500
} else if(nivel === 'normal'){
    //1000
    criaMosquitoTempo = 1000
} else if(nivel === 'dificil'){
    //750
    criaMosquitoTempo = 750
}


//Funçao para ajustar a tela quando o usuario quiser redimencionar a jantela (Utilizar a função na tag body)
function ajusteTamanhoPalcoJogo() {
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

ajusteTamanhoPalcoJogo()

//Estrutura de decisao interrompe se manter as vidas e zezar o cronometro abre a pagina de vitoria
var cronometro = setInterval(function(){
    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = "vitoria.html"
    } else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)


function posicaoRandomica(){

    //Remove mosquito anterior altomaticamente (caso ele exista)
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()

        //Estrutura de decisao que interrompe em 3 vidas e abre a pagina de Game Over
        if(vidas > 3){
            window.location.href = "fim_de_jogo.html"
        } else{
             //Perde a vida caso nao clique no tepo certo
            document.getElementById('v' + vidas).src = "src/img/coracao_vazio.png"
        }
        
        vidas++
    }
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
    mosquito.className = tamanhoAleatorio() + ' ' +ladoAleatorio()
    // forma a cordenada em pixel
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    
    //cria o lemento ID para a imagem
    mosquito.id ='mosquito'
    //Adiciona o evento de clique na imagem
    mosquito.onclick = function() {
        this.remove()
    }
    
    


    document.body.appendChild(mosquito)

}


function tamanhoAleatorio() {
    //Cria 3 classes de 0 a 2 para ajustar-mos o tamanho 
    var classe = Math.floor(Math.random() * 3 )

    switch(classe){
        case 0:
            return "mosquito1"
        case 1:
            return "mosquito2"
        case 2:
            return "mosquito3"
    }
}

function ladoAleatorio(){
   //Muda o lado direiro e esquedo da imagem aleatoriamente
    var classe = Math.floor(Math.random() * 2 )
    
    switch(classe){
        case 0:
            return "ladoA"
        case 1:
            return "ladoB"

    }

}