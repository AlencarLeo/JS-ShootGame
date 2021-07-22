import toShot from './atira.js'

export default function fireTargetPosition (){
    const alvos = document.querySelectorAll('.alvo');
    const minX = 100;
    const minY = 100;

    const maxX = window.innerWidth - 100;
    const maxY = window.innerHeight - 100;

    function mudarTudo(){
        alvos.forEach((i)=>{
            let x = Math.random() * (maxX - minX) + minX;
            let y = Math.random() * (maxY - minY) + minY;
            i.style.top = y + 'px';
            i.style.left = x + 'px';
        })
    }
    setInterval(mudarTudo, 1200);
}