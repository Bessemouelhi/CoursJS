console.log("toto");
console.log("OK");

const prenom = "Bessem";
const nom = "MOUELHI";
const age = 37;

const phrase = "Bonjour je m'appelle " + prenom + " " + nom + ", j'ai " + age + " ans";
const phrase2 = `Bonjour je m\'appelle ${prenom} ${nom}, j\'ai ${age} ans`;

//alert(phrase);
console.log(phrase2);

var myday  = new Date();
alert(myday.toLocaleDateString("fr-FR"));

var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();

console.log(today.toLocaleDateString("fr-FR")); // 9/17/2016
console.log(today.toLocaleDateString("fr-FR", options)); // Saturday, September 17, 2016

let obj = {};
obj['name'] = 'Alex Travis';
obj['age'] = 25;
obj['address'] = 'Paris, France';
obj['function'] = ['Developer', 'Administrator', 'Marketer'];
console.log(obj);

var tabPage = new Array();
tabPage["papa"]="toto"; 
tabPage["maman"]="tata";
tabPage["enfant"]="titi";
console.log(tabPage);
console.table(tabPage);

for (const key in tabPage) {
    if (Object.hasOwnProperty.call(tabPage, key)) {
        const element = tabPage[key];
        console.log(key + " " + element);
    }
}
