const igrulki = () => {

    const html = `        <aside class="icon-1 fp1"></aside>
    <aside class="icon-14 fp2"></aside>
    <aside class="icon-15 fp3"></aside>
    <aside class="icon-17 fp4"></aside>
    <aside class="icon-12 fp5"></aside>
    <aside class="icon-4 fp6"></aside>
    <aside class="icon-2 fp7"></aside>
    <aside class="icon-3 fp8"></aside>
    <aside class="icon-5 fp9"></aside>
    <aside class="icon-6 fp10"></aside>
    <aside class="icon-8 fp11"></aside>
    <aside class="icon-10 fp12"></aside>
    <aside class="icon-11 fp13"></aside>
    <aside class="icon-13 fp14"></aside>
    <aside class="icon-16 fp15"></aside>
    <aside class="icon-7 fp16"></aside>`
    const htmlMin = `        <aside class="icon-15 fp3"></aside>
    <aside class="icon-5 fp9"></aside>
    <aside class="icon-17 fp4"></aside>
    <aside class="icon-12 fp5"></aside>
    <aside class="icon-10 fp12"></aside>
    <aside class="icon-4 fp6"></aside>`
    const formWrapper = document.getElementsByClassName('form-wrapper')[0];
    if(window.innerWidth>760) {
        formWrapper.innerHTML += html
    }
    else {
        formWrapper.innerHTML += htmlMin
    }
};
document.addEventListener('DOMContentLoaded',()=>{
    igrulki()
})