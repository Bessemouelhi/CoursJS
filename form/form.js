let inputValue = "";
let body = document.querySelector('body');

let form = document.createElement("form");
//form.setAttribute("method", "post");
//form.setAttribute("action", "submit.php");


let input = document.createElement("input");
input.setAttribute("type", "text");

//let p1 = document.createElement("p");
//p1.innerHTML = '';

form.addEventListener('submit', 
    (e) => {
        e.preventDefault();
        inputValue = input.value;
        let p1 = document.createElement("p");
        p1.innerHTML = inputValue;
        body.append(p1);
        /*p1.innerText += '\n\n'+inputValue;
        console.log(inputValue);*/

    }
)

/*affichage.addEventListener("submit",e=>{
    e.preventDefault();
    inputValue = affichage1.value;
    affichage2.innerHTML = inputValue;
});*/

form.append(input);
body.append(form);
//body.append(p1);


// let maDiv = document.getElementById('maDiv');
// maDiv.addEventListener('click', e => {
//     maDiv.classList.toggle('active');
// })

let open = document.getElementById('open');
let close = document.getElementById('close');
// let close = document.querySelector('#maDiv button');

open.addEventListener('click', () => {
    maDiv.classList.add('active');
})
close.addEventListener('click', () => {
    console.log(close);
    maDiv.classList.remove('active');
})