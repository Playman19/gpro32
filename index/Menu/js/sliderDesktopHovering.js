const sliderDesktopHovering = () => {
    let par = document.getElementById('slider-mover');
    const items = [
        document.getElementById('slider-1'),
        document.getElementById('slider-2'),
        document.getElementById('slider-3')
    ]
    const move = (id) => {
        let item = items[id.slice(-1) - 1];
        if(item.classList.contains('slider-blur')) {
            item.classList.remove('slider-blur');;
            item.children[0].classList.add('none')
        }
    }
    const out = (id) => {
        let item = items[id.slice(-1) - 1];
        if(!item.classList.contains('slider-blur')) {
            item.classList.add('slider-blur');
            item.children[0].classList.remove('none')
        }
    }
    par.addEventListener('mouseover',(ev)=>{
        if(ev.target.id !='slider-mover') {
            move(ev.target.id)
        }
    });
    par.addEventListener('mouseout',(ev)=>{
        if(ev.target.id !='slider-mover') {
            out(ev.target.id)
        }
    })
};
document.addEventListener('DOMContentLoaded',()=>{
    if(window.innerWidth>1100) {
            sliderDesktopHovering()
        }
})