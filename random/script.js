// console.log("toto");
// console.log("OK");

// const prenom = "Bessem";
// const nom = "MOUELHI";
// const age = 37;

// const phrase = "Bonjour je m'appelle " + prenom + " " + nom + ", j'ai " + age + " ans";
// const phrase2 = `Bonjour je m\'appelle ${prenom} ${nom}, j\'ai ${age} ans`;

// //alert(phrase);
// console.log(phrase2);

// var myday = new Date();
// //alert(myday.toLocaleDateString("fr-FR"));

// var options = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric'
// };
// var today = new Date();

// console.log(today.toLocaleDateString("fr-FR")); // 9/17/2016
// console.log(today.toLocaleDateString("fr-FR", options)); // Saturday, September 17, 2016

// let obj = {};
// obj['name'] = 'Alex Travis';
// obj['age'] = 25;
// obj['address'] = 'Paris, France';
// obj['function'] = ['Developer', 'Administrator', 'Marketer'];
// console.log(obj);

// var tabPage = new Array();
// tabPage["papa"] = "toto";
// tabPage["maman"] = "tata";
// tabPage["enfant"] = "titi";
// console.log(tabPage);
// console.table(tabPage);

// for (const key in tabPage) {
//     if (Object.hasOwnProperty.call(tabPage, key)) {
//         const element = tabPage[key];
//         console.log(key + " " + element);
//     }
// }

// var a = 42;
// var b = 4.2;
// var c = -42;
// var d = "42";

/*alert("ma variable a est de type : " + typeof(a) + //number
"\nma variable b est de type : " + typeof(b) + //number
"\nma variable c est de type : " + typeof(c) + //number
"\nma variable d est de type : " + typeof(d) //string
);*/

// var machaine = "exemple";
// var maChaine = new String("exemple");

// /*alert("ma variable machaine est de type : " + typeof(machaine) + //ma variable machaine est de type : string
// "\nma variable maChaine est de type : " + typeof(maChaine)); //ma variable maChaine est de type : object*/

// var n = null;
// var u = undefined;
// var nn = NaN;

/*alert("ma variable n est de type : " + typeof(n) + //ma variable n est de type : object
"\nma variable u est de type : " + typeof(u) + //ma variable u est de type : undefined
"\nma variable nn est de type : " + typeof(nn)); //ma variable nn est de type : number*/



// var heureOuverture = 9;
// var heureFermeture = 17;
// var heureArrive = 12;

// if (heureArrive < heureOuverture) {
//     alert("Trop tot !");
// } else if (heureOuverture <= heureArrive && heureArrive < heureFermeture) {
//     if (heureArrive < 12) {
//         alert("Bienvenue ! C'est le matin !");
//     } else {
//         alert("Bienvenue ! C'est l'après midi !");
//     }
// } else {
//     alert("Trop tard ! Revenez demain !");
// }


// var note = 12.5;
// var noteAmericaine = "";

// if (note > 19) {
//     noteAmericaine = "A+";
// } else if (19 >= note && note >= 18) {
//     noteAmericaine = "A";
// } else if (18 > note && note >= 15) {
//     noteAmericaine = "B";
// } else if (15 > note && note >= 12) {
//     noteAmericaine = "C";
// } else if (12 > note && note >= 9) {
//     noteAmericaine = "D";
// } else if (9 > note && note >= 6) {
//     noteAmericaine = "E";
// } else if (note < 6) {
//     noteAmericaine = "F";
// } else {
//     noteAmericaine = "ABS";
// }

// console.log(noteAmericaine);

// switch (noteAmericaine) {
//     case "A+":
//         alert("Excellent !");
//         break;
//     case "A":
//         alert("Très bien !");
//         break;
//     case "B":
//         alert("Bien !");
//         break;
//     case "C":
//         alert("Correct !");
//         break;
//     case "D":
//         alert("Moyen !");
//         break;
//     case "E":
//         alert("Insuffisant");
//         break;
//     case "F":
//         alert("Nul ! Nul ! Nul !");
//         break;
//     default:
//         alert("Indéfini !");
//         break;
// }


// var montant = 1000;
// var reduction = 0;
// var total = 0;

// if (montant < 1000) {
//     reduction = 0;
// } else if (1000 <= montant && montant <= 2500) {
//     reduction = 5;
// } else {
//     reduction = 10;
// }

// total = montant - (montant * reduction / 100);

// switch (reduction) {
//     case 0:
//         alert("nulle !");
//         break;
//     default:
//         alert("total = " + total);
//         break;
// }

// var myArray = [1, 2, 3];
// var myArrayStr = ["a", "b", "c"];

// myArray.push(myArrayStr); //[1, 2, 3, 4]
// myArray.pop(); //[1, 2]
// myArray.unshift(); //

// myArrayStr = myArrayStr.concat('d');
// //myArrayStr.join("-");
// //myArrayStr.map();

// console.table(myArray);
// console.log(myArrayStr.join("-"));
// console.log(myArrayStr.slice(-1));

const div = document.getElementsByClassName('carre');

for (let i = 0; i < div.length; i++) {
    if(i % 2 == 0) {
        div[i].style.backgroundColor = 'rgb(255, 0, 0)';
    }
}

let carreDiv = Array.from(div);
console.log(carreDiv); 

carreDiv.map((el, index) => {
    console.log("index : " + index);
    if (index % 2 == 0) {
        el.style.backgroundColor = 'rgb(0, 0, 255)';
    }
});

let filteredArr = carreDiv.filter((el, index) => index % 2 != 0);
for (let index = 0; index < filteredArr.length; index++) {
    filteredArr[index].style.backgroundColor = 'rgb(0, 255, 255)';
    
}

let body = document.getElementsByTagName('body');
document0.insertAdjacentHTML(carreDiv);

/*div.forEach(element => {
    console.log(element); 
    if(element % 2 == 0) {
        element.style.backgroundColor = 'rgb(255, 0, 0)';
    }
});*/
console.log(div); 

