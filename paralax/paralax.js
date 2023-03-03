const img = document.querySelectorAll('img');
window.addEventListener('scroll', function(){
    let lastPos = this.window.scrollY;
    // img.forEach(element => {
    //     element.style.left = (Math.floor(lastPos / 5)) + '%';
    // })
    for (let i = 0; i < img.length; i++) {
        const element = img[i];
        element.style.left = (Math.floor(lastPos / 5)) + '%';
        element.style.borderRadius = (Math.floor(lastPos / 10)) + '%';
    }
})