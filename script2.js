let mybody = document.getElementsByTagName('body');
let clickColor = document.getElementById('randomColor');

function getRandomInt() {
    return Math.floor(Math.random() * 256);
}

// clickColor.onclick = function() {
//     console.log("CLICK");
//     //mybody[0].style.backgroundColor = `rgb(${getRandomInt()}, ${getRandomInt()}, ${getRandomInt()})`; 
//     mybody[0].style.backgroundColor = 'rgb('+ getRandomInt() + ', '+ getRandomInt() + ', ' + getRandomInt()+ ')'; 
// };

clickColor.addEventListener("click", function() {
    mybody[0].style.backgroundColor = 'rgb('+ getRandomInt() 
                                            + ', '
                                            + getRandomInt() 
                                            + ', ' 
                                            + getRandomInt()
                                        + ')'; 
}); 

let myImg = document.querySelector('#myimg');
//let tagImg = document.getElementsByTagName('img');
console.log(myImg);

myImg.src = 'img/myimg.jpg';
//myImg.style.backgroundImage = "url('img/myimg.jpg')"; 
//tagImg[0].style.backgroundImage = "url('img/myimg.jpg')"; 
const img = document.querySelector('#img'); //sélection de l'image par son ID
console.log(img);
//img.src = "https://picsum.photos/200/301";
//img.src ="img/javascript.png";
//img.setAttribute('src','img/javascript.png');


let testAll = document.getElementsByClassName('test');
console.log(testAll);
for (let i = 0; i < testAll.length; i++) {
    //console.log(testAll[i].id);
    console.log(testAll[i].getAttribute('id')); 
    testAll[i].addEventListener("click", function(e) {
        //console.log(testAll[i].getAttribute('id')); 
        console.log(e.currentTarget.id); 
     }); 
}

/*testAll.addEventListener("click", function(el) {
   console.log(el.target.tagName);
})*/