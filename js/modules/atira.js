export default function toShot(){
    function atirar(e){
    
        const div = document.createElement('div');
    
        let xShot = e.clientX;
        let yShot = e.clientY;

        console.log(xShot, yShot)
    
        div.classList.add('armor-shot')
    
        div.style.top = yShot + 'px';
        div.style.left = xShot + 'px';
    
    
        document.body.appendChild(div);
    }
    
    addEventListener('click', atirar);
}