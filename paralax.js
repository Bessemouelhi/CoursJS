const img = document.querySelectorAll('img');
window.addEventListener('scroll', function(){
    let lastPos = this.window.scrollY;
    img.forEach(element => {
        element.style.left = (Math.floor(lastPos / 5)) + '%';
    })
})