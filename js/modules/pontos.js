export default function points(){
      
}

const alvo = document.querySelector('.alvo')

function pontuacao(e){
    console.log(e.target)
    if(e.target == alvo){
        console.log('oi')
    }
}

addEventListener('click', pontuacao) 