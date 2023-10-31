const numbers = ["volvo", "saab", "seat", "volkswagen", "bmw", "opel", "audi", "mercedes", "kia", "lexus", "tesla"]
// 1 Skriv ut den strängen i arrayen som är längst.
function longestWord(ordLista){
let longest = "";

for(const ord of ordLista){
    if(ord.length > longest.length){
        longest = ord;
    }
}
console.log(longest)
}


// 2 Skriv ut den strängen i arrayen som kortast.
function shortestWord(ordLista){
let short = ordLista[0];

    for(const ord of ordLista){   
        if(short.length > ord.length){
            short = ord;
        }
    }
    
console.log(short)
}


// 3 Kapitalisera alla strängar i arrayen, alltså ändra de så att alla börjar med stor bosktav istället för liten.
function capitalize(ordLista){
let cap = "";
let word = "";
let result = "";
const newArray = [];

    for(const ord of ordLista){
        cap = ord[0].toUpperCase();
        word = ord.slice(1);
        result = cap+word;
        newArray.push(result)
   
    }

return newArray;
}


// 4 Reversera alla enskilda strängar i arrayen, alltså strängarna skrivs ut baklänges.
function reverseStrings(ordLista){
const newArray = ordLista.map(function(ord) {
    return ord.split('').reverse().join('');
});

console.log(newArray)
}


// 5 Sortera alla strängar i alfabetisk ordning.
function alphabeta(ordLista){
    const newArray = [...ordLista].sort();
    console.log(newArray);
    return newArray;
}


// 6 Ta bort alla strängar i arrayen som börjar på till exempel s.
function deleter(ordLista, x){
const newArray = ordLista.filter(function (ord) {
    return ord[0] !== x
});
console.log(newArray);
return newArray;
}


// 7 Reversera hela strängen, den strängen som var på första plats ska nu vara på sista plats.
function reverseArray(ordLista){
    // min överkomplicerade lösning
    let j= 0;
let mid = Math.floor(ordLista.length /2)
for(let i=ordLista.length-1; i>mid; i--){
    let temp=ordLista[i]
    ordLista[i] = ordLista[j]
    ordLista[j] = temp;
    j++;
}
//egentlig lösning
const newArray = [...ordLista].reverse()
return newArray;
}


// 8 lägg till ett ord till varje sträng. Till exempel i mitt fall så vill jag lägga till “bil” till alla strängar. Så det blir “volvobil”, “saabbil” och så vidare…

function addWord(ordLista){
const userWord = prompt('Lägg till ett ord i slutet på varje sträng.')
const newArray = [];

    for(const ord of ordLista){
        newArray.push(ord.concat(userWord))
    }
return newArray;
}
