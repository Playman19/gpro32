document.addEventListener('DOMContentLoaded', ()=>{
    setUtp()
})
const setUtp = () => {
    let utp = document.getElementById('utp');
    let info = document.getElementsByClassName('utp-info')
    const setUtpSlide = () => {
        switch (utp.classList[0]) {
            case 'slide1':
                utp.classList.replace('slide1','slide2');
                info[0].classList.add('none')
                info[1].classList.remove('none')
                break;
            case 'slide2':
                utp.classList.replace('slide2','slide3');
                info[1].classList.add('none')
                info[2].classList.remove('none')
                break;
            case 'slide3':
                utp.classList.replace('slide3','slide1');
                info[2].classList.add('none')
                info[0].classList.remove('none')
                break;
            default:
                break;
        }
    }
    setInterval(setUtpSlide,6000)
}
