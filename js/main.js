const ham=document.querySelector('.ham');
const enlaces=document.querySelector('.enlaces-menu');
const barras=document.querySelectorAll('.ham span')

ham.addEventListener('click',()=>{
enlaces.classList.toggle('activado')
barras.forEach(child =>{child.classList.toggle('animado')});
});

window.onscroll=function(){
    if(document.documentElement.scrollTop > 100){
        document.querySelector('.go-top-container').classList.add('show')
    }else{
        document.querySelector('.go-top-container').classList.remove('show')
    }
}

document.querySelector('.go-top-container')
.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});