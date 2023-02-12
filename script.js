const buttonPoster=document.querySelector('.poster button')

buttonPoster.addEventListener('click',function(){
    const gambarPoster=document.getElementsByClassName('gambar-poster')[0]
    gambarPoster.classList.toggle('muncul')
})