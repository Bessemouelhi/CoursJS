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
//alert(myday.toLocaleDateString("fr-FR"));

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

var a = 42;
var b = 4.2;
var c = -42;
var d = "42";

alert("ma variable a est de type : " + typeof(a) + //number
"\nma variable b est de type : " + typeof(b) + //number
"\nma variable c est de type : " + typeof(c) + //number
"\nma variable d est de type : " + typeof(d) //string
);

var machaine = "exemple";
var maChaine = new String("exemple");

alert("ma variable machaine est de type : " + typeof(machaine) + //ma variable machaine est de type : string
"\nma variable maChaine est de type : " + typeof(maChaine)); //ma variable maChaine est de type : object

var n = null;
var u = undefined;
var nn = NaN;

alert("ma variable n est de type : " + typeof(n) + //ma variable n est de type : object
"\nma variable u est de type : " + typeof(u) + //ma variable u est de type : undefined
"\nma variable nn est de type : " + typeof(nn)); //ma variable nn est de type : number



