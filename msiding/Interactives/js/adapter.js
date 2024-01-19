const interactiveAdapter = () => {

    const firstContainer = document.getElementById('int-m1');
    const secondContainer = document.getElementById('int-m2');
    const thirdContainer = document.getElementById('int-m3');

    const setContainer = (n) => {
        const innerArr = [
            `${document.getElementsByClassName('int-cards')[0].innerHTML}`,
            `${document.getElementsByClassName('int-cards')[1].innerHTML}`,
            `${document.getElementsByClassName('int-cards')[2].innerHTML}`,
        ]
        if(n == 0) {
            secondContainer.innerHTML = innerArr[0]
            firstContainer.innerHTML = innerArr[1];
        }
        else if(n == 1) {
            thirdContainer.innerHTML = innerArr[0]
            firstContainer.innerHTML = innerArr[2];
        }
    }
    secondContainer.addEventListener('click',(ev) => {
        if(ev.target.tagName === 'IMG') {
            setContainer(0)
        }

    })
    thirdContainer.addEventListener('click',() => {
        setContainer(1)
    })
};
document.addEventListener('DOMContentLoaded',()=>{
    if(window.innerWidth<760) {
        interactiveAdapter()
    }
})