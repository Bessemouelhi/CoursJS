let numbersOne = [1, 2, 3];
let numbersTwo = [4, 5, 6];
let numbersThree = [7, 8, 9];
let numbersFour = [10, 11, 12];
let numbersCombined = [...numbersOne, ...numbersTwo];
let numbersPushed = [];
numbersPushed.push(numbersThree, numbersFour);

document.write(numbersCombined+"\n");
document.write(numbersPushed+"\n");

// console.log("numbersCombined : " + numbersCombined);
// console.log("numbersPushed : " + numbersPushed);

// console.log(numbersCombined);
// console.log(numbersPushed);

function mario(titre, date, platform) {
    this.titre = titre;
    this.date = date;
    this.platform = platform;
}

let mario1 = new mario("Super mario Bros.", 1985, "NES");
let mario2 = new mario("Super mario Bros. 2", 1988, "NES");
let mario3 = new mario("Super mario Bros. 3", 1988, "NES");
let mario4 = new mario("Super mario Land", 1989, "Game Boy");
let mario5 = new mario("Super mario World", 1990, "Super Famicom");
let mario6 = new mario("Super mario Land 2", 1992, " Game Boy");
let mario7 = new mario("Super mario World 2 Yoshi's Island", 1995, "Super Famicom");
let mario8 = new mario("Super mario 64", 1996, "Nintendo 64");
let mario9 = new mario("Super mario Sunshine", 2002, "GameCube");
let mario10 = new mario("Super mario Galaxy", 2007, "Wii");

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

Object.values(maCollection).map( el => {
    console.log(el.titre);
    let inHtml = "";
    inHtml += "<div class='jeu'><h2>" + el.titre + "</h2>";
    inHtml += "<h3>" + el.platform + "</h3>";
    inHtml += "<h4>" + el.date + "</h4></div>";

    myBody.innerHTML += inHtml;
})

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
