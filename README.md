<p align="center"><img src="img/js_logo.png"></img></p>
<h1 align="center"> Cours de JavaScript</h1>
 
## Introduction au JavaScript

JavaScript est un **langage de programmation de scripts** principalement employé dans **les pages web interactives** et à ce titre est une partie essentielle des applications web. Avec les langages HTML et CSS, JavaScript est au cœur des langages utilisés par les développeurs web.

## Qu’est-ce qu’une variable ?

Une variable est un conteneur servant à stocker des informations de manière temporaire, comme une chaine de caractères (un texte) ou un nombre par exemple.

Le propre d’une variable est de pouvoir varier, c’est-à-dire de pouvoir stocker différentes valeurs au fil du temps et c’est cette particularité qui les rend si utiles.

Notez bien déjà qu’une variable en soi et la valeur qu’elle va stocker sont deux éléments différents et qui ne sont pas égaux. Encore une fois, une variable n’est qu’un conteneur. Vous pouvez imaginer une variable comme une boite dans laquelle on va pouvoir placer différentes choses au cours du temps.

Les variables sont l’une des constructions de base du JavaScript et vont être des éléments qu’on va énormément utiliser. Nous allons illustrer leur utilité par la suite.


- Le nom d'une variable ne doit pas être un mot réservé
- Le nom d’une variable doit obligatoirement commencer par une lettre ou un underscore (_) et ne doit pas commencer par un chiffre ;
- Le nom d’une variable ne doit contenir que des lettres, des chiffres et des underscores mais pas de caractères spéciaux ;
- Le nom d’une variable ne doit pas contenir d’espace.

``` 
var maChaine = new String("");
var a = 42;
var b = 4.2;
var a = -42;
var a = "42";

alert("ma variable a est de type : " + typeof(a) +
"\nma variable b est de type : " + typeof(b) +
"\nma variable c est de type : " + typeof(c) +
"\nma variable d est de type : " + typeof(d)
);
```
<p align="center"><img src="img/js_code_alert1.png"></img></p>
![js_code_alert1](img\js_code_alert1.png)

``` 
var mahaine = "exemple";
var maChaine = new String("exemple");

alert("ma variable machaine est de type : " + typeof(machaine) +
"\nma variable maChaine est de type : " + typeof(maChaine));
```

<p align="center"><img src="img/js_code_alert2.png"></img></p>

``` 
var n = null;
var u = undefined;
var nn = NaN;

alert("ma variable n est de type : " + typeof(n) +
"\nma variable u est de type : " + typeof(u) +
"\nma variable nn est de type : " + typeof(nn));
```

<p align="center"><img src="img\js_code_alert3.png"></img></p>

## Les opérateurs mathématique

```
var x = 32;
var y = 5;
var z = 2;

alert(y)

y += z //équivaut y = y + z
alert(y) //renvoi 7
y *= z //équivaut y = y * z
alert(y) //renvoi 14
y -= z //équivaut y = y - z
alert(y) //renvoi 12
y /= z //équivaut y = y / z
alert(y) //renvoi 6
y %= z //équivaut y = y % z
alert(y) //renvoi 0
```


| Opérateur | Définition |
|:---------:|:----------|
| ==        | Permet de tester l’égalité sur les valeurs |
| ===	| Permet de tester l’égalité en termes de valeurs et de types |
| !=	| Permet de tester la différence en valeurs |
| <>	| Permet également de tester la différence en valeurs|
| !==	| Permet de tester la différence en valeurs ou en types |
| <	| Permet de tester si une valeur est strictement inférieure à une autre | 
| >	 | Permet de tester si une valeur est strictement supérieure à une autre |
| <=	| Permet de tester si une valeur est inférieure ou égale à une autre |
| >=	| Permet de tester si une valeur est supérieure ou égale à une autre |


## Les tableaux en javaScript

### Création d’un tableau en JavaScript

Les tableaux ne sont pas des valeurs primitives. Cependant, nous ne sommes pas obligés d’utiliser le constructeur Array() avec le mot clef new pour créer un tableau en JavaScript.

En effet, une syntaxe alternative et plus performante (et qu’on préfèrera donc toujours à la syntaxe new Array()) est disponible en JavaScript et nous permet des créer des tableaux qui vont tout de même pouvoir utiliser les propriétés et méthodes du constructeur Array().

Cette syntaxe utilise les crochets […] comme ceci :

```
var myArray = [1, 2, 3];
var myArrayStr = ["a", "b", "c"];
```

### Les propriétés et les méthodes du constructeur Array()

| Méthode | Résultat |
|:-------:|:---------|
| push(4) |  ajoute la valeur indiqué à la fin du tableau ([1, 2, 3, 4])|
 | pop() | [1, 2] retire la dernière valeur|
 | shift() | [2, 3] retire la première valeur|
 | unshift(0) | [0, 1, 2, 3] ajoute la valeur indiqué au début du tableau|
 | concat("d")| fusionne des tableaux sans changer les valeurs du tableau initial|
 | join('-')|  a-b-c joindre les valeurs du tableau sans changer les valeurs du tableau initial|
 | slice(1)|  ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début sans changer les valeurs du tableau initial|
 | slice(-1)|  ["b", "c"] retire le nombre d'éléments indiqué du tableau en partant du début et en comptant depuis la fin sans changer les valeurs du tableau initial|
 | includes("c")| true vérifie si la valeur existe|
 | indexOf("c")| 2 renvoi le position (index) de la valeur dans le tableau|
 | reduce((acc, cou)=> acc + cou ) |  additionne tous les éléments du tableau|
 | find(el => el > 2) | 3 renvoie la valeur du premier élément trouvé dans le tableau qui respecte la condition|
 | findIndex(el => el > 2) | 2 renvoie l'index du premier élément trouvé dans le tableau qui respecte la condition|
| map(el => el * 2); | [2, 4, 6] crée un nouveau tableau avec les résultats de l'appel d'une fonction fournie sur chaque élément du tableau appelant.|
 | some(el => el > 2); | true passe le test implémenté par la fonction fournie. Elle renvoie un booléen indiquant le résultat du test.|
 | filter(el => el > 1) |  [2,3] renvoi tous les éléments qui respectent la condition|
 | every(el => el > 1);| false renvoi true ou false si au moins un élément respecte la condition |
 | reverse();| inverse tout les éléments du tableau |