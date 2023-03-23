let numbersOne = [1, 2, 3];
let numbersTwo = [4, 5, 6];
let numbersThree = [7, 8, 9];
let numbersFour = [10, 11, 12];
let numbersCombined = [...numbersOne, ...numbersTwo];
let numbersPushed = [];
const btnPop = document.getElementsByClassName('POPUPjeu');
numbersPushed.push(numbersThree, numbersFour);

document.write(numbersCombined+"\n");
document.write(numbersPushed+"\n");

// console.log("numbersCombined : " + numbersCombined);
// console.log("numbersPushed : " + numbersPushed);

// console.log(numbersCombined);
// console.log(numbersPushed);

function mario(titre, date, platform, description, logo) {
    this.titre = titre;
    this.date = date;
    this.platform = platform;
    this.description = description
    this.logo = logo;
}

let mario1 = new mario("Super mario Bros.", 1985, "NES", "Super Mario Bros. (スーパーマリオブラザーズ, Sūpā Mario Burazāzu?) est un jeu vidéo de plates-formes à défilement horizontal développé par Nintendo R&D4 et édité par Nintendo. Il est sorti sur Famicom au Japon en 1985 puis sur Nintendo Entertainment System en Amérique du Nord la même année et en 1987 en Europe. Il s'agit du premier jeu de la série Super Mario.");

let mario2 = new mario("Super mario Bros. 2", 1988, "NES", "Super Mario Bros. 2 (ou Super Mario USA au Japon) est un jeu vidéo de plates-formes développé par Nintendo R&D4 et édité par Nintendo. Il sort sur Nintendo Entertainment System en 1988 en Amérique du Nord, en 1989 en Europe puis en 1992 au Japon.");

let mario3 = new mario("Super mario Bros. 3", 1988, "NES", "Super Mario Bros. 3 (スーパーマリオブラザーズ3, Sūpā Mario Burazāzu Surī?) est un jeu vidéo de plates-formes développé et édité par Nintendo sur Nintendo Entertainment System. Il s'agit du troisième volet de la série Super Mario et il est commercialisé en 1988 au Japon, en 1990 aux États-Unis et en 1991 en Europe. Le développement est pris en charge par Nintendo Entertainment Analysis & Development sous la houlette de Shigeru Miyamoto, qui dirige le jeu avec Takashi Tezuka et Hiroshi Yamauchi.");

let mario4 = new mario("Super mario Land", 1989, "Game Boy", "");
let mario5 = new mario("Super mario World", 1990, "Super Famicom", "");
let mario6 = new mario("Super mario Land 2", 1992, " Game Boy", "");
let mario7 = new mario("Super mario World 2 Yoshi's Island", 1995, "Super Famicom", "");
let mario8 = new mario("Super mario 64", 1996, "Nintendo 64", "");
let mario9 = new mario("Super mario Sunshine", 2002, "GameCube", "");
let mario10 = new mario("Super mario Galaxy", 2007, "Wii", "");

let myCollec = new Map();
myCollec.set(1, mario1);
myCollec.set(2, mario2);
myCollec.set(3, mario3);
myCollec.set(4, mario4);
myCollec.set(5, mario5);
myCollec.set(6, mario6);
myCollec.set(7, mario7);
myCollec.set(8, mario8);
myCollec.set(9, mario9);
myCollec.set(10, mario10);

let maCollection = {...{mario1}, ...{mario2}, ...{mario3}, 
                    ...{mario4}, ...{mario5}, ...{mario6}, 
                    ...{mario7}, ...{mario8}, ...{mario9}, ...{mario10}};
console.log(maCollection);

for (const key in maCollection)
{
    console.log(maCollection[key]); //syntaxe obligatoire lorsque la clé est dynamique
};

console.log(">>>>>>>>>>>>>>>>");

let myBody = document.querySelector('body');

Object.values(maCollection).map( (el, index) => {
    console.log(el.titre);
    let inHtml = "";
    inHtml += "<div class='jeu'><h2>" + el.titre + "</h2>";
    inHtml += "<h3>" + el.platform + "</h3>";
    inHtml += "<h4>" + el.date + "</h4>";
    inHtml += "<button class='POPUPjeu' id='mario" + (index+1) + "'>OPEN</button></div>";

    myBody.innerHTML += inHtml;
})

for (let index = 0; index < btnPop.length; index++) {
    let key = btnPop[index].id;
    console.log(key);
    btnPop[index].addEventListener('click' ,(e) => {
        console.log(maCollection[key].titre);
    })
}

// myBody.innerHTML = '<h2>' + mario1.titre + '</h2>';
// for (const key in myCollec) {
//     console.log(myCollec[key]);
//     const element = myCollec[key];
//     myBody.innerHTML = '<h2>' + element.titre + '</h2>';
// }

// myCollec.forEach((value, key) => {
//     const element = value;
//     myBody.innerHTML += '<h2>' + element.titre + '</h2>';
// });

console.log(myCollec);

// function MaCollection(...obj) {
//     let collection = [];
//     collection.push(obj);
//     function ajoute(obj) {
//         this.collection.push(obj);
//     }
// }

// let maCollec = new MaCollection(mario1);
// maCollec.ajoute(mario2);
// maCollec.ajoute(mario3);

// console.log(maCollec);
