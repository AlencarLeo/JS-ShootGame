export default function crosshair(){
    const cursor = document.getElementById('cursor');
    if(cursor){
        document.addEventListener('mousemove', (event)=>{
            const x = event.clientX;
            const y = event.clientY;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
        })
    }
}