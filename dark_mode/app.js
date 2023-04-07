const form = document.getElementsByTagName('form');
const checkDark = document.getElementById('dark');

let isDark = localStorage.getItem('dark'); //récuperation de la variable stocké en local(cookie)
console.log("isDark : ", isDark);
checkDark.checked = isDark === 'true' ? true : false; //affecte la checkbox en fonction du cookie
checkDarkMode(checkDark.checked);

//écouteur d'evenememt sur la checkbox
checkDark.addEventListener('change', (e) => {
    //e.preventDefault();
    console.log(checkDark.checked);
    localStorage.setItem('dark', checkDark.checked);
    checkDarkMode(checkDark.checked);
})

function checkDarkMode(el) {
    console.log("checkDark.checked : ", checkDark.checked);
    
    if(el === true) {
        document.body.classList.add('dark-mode');
        //document.body.style.backgroundColor = 'black';
        checkDark.checked = true;
    }
    else if(el === false) {
        document.body.classList.remove('dark-mode');
        //document.body.style.backgroundColor = 'white';
        checkDark.checked = false;
    }
}