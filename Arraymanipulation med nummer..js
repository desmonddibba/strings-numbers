// Arraymanipulation med nummer.
const numbers = [1, 5, 67, 14, 34, 21, 80, 7, 9, 28, 44, 23, 12, 10, 63, 102]



// 1 Addera ihop alla nummrena i arrayen och returnera summan
function addAll(talLista){
let result = 0;
    for(let i=0; i<talLista.length; i++){    
        result += talLista[i]
    }
return result;
}


// 2 Räkna ut medelvärdet av alla nummer i arrayen och skriv ut det.
function averageAll(x){
    const talLista = x;
    let result = 0;
    for(let i=0; i<talLista.length; i++){
        result += talLista[i]
    }
    result = result/(i+1)
return result;
}


// 3 Hitta det största värdet i arrayen och skriv ut det.
function storstTal(x){
    const talLista = x;
    talLista.sort((a,b) => b - a);
    return talLista[0];
}


// 4 Hitta det minsta värdet i arrayen och skriv ut det.
function minstTal(x){
    const talLista = x;
    talLista.sort((a,b) => a - b);
    return talLista[0];
}


// 5 Leta efter ett specifikt värde i arrayen och skriv ut indexpositionen som den finns på.
function vilketIndex(x){
    const talLista = x;
    let nummer;
    let result =0;
    while (true){
    nummer = Number(prompt('Ange tal du vill söka efter: (1, 5, 67, 14, 34, 21, 80, 7, 9, 28, 44, 23, 12, 10, 63, 102'))
    if(talLista.includes(nummer)){
        result = talLista.indexOf(`Indexposition nr ${nummer}`)
        break;
       }else{
        alert('Inget sökresultat! Försök igen.')
        continue;
       }
    }    
return result;1
}


// 6 För in fyra stycken nya nummer i början av arrayen och skriv ut den.
function addFour(talLista){
let tal = 0;
    for(let i=0; i<4; i++){
        tal = Number(prompt(`Ange tal nr ${i+1}`))
        talLista.unshift(tal);
    }
    console.log(talLista);
}


// 7 Ta bort tre nummer ifrån mitten av arrayen och skriv ut den.
function treMitten(talLista){
    let mittIndex = Math.round((talLista.length-1)/2)       
    talLista.splice((mittIndex-1), 3)
console.log(talLista)
}


// 8 Ta bort fyra nummer ifrån början av arrayen och för in dem i mitten av arrayen och skriv ut den.
 function flyttaBak(talLista){
     let mittIndex = Math.round((talLista.length-1)/2)
     let fyraForsta = talLista.slice(0, 4)
     talLista.splice(0, 4)
     talLista.splice(mittIndex, 0, ...fyraForsta)
 console.log(talLista)
 }

 flyttaBak(numbers);


// 9 Skapa en ny array som innehåller alla nummer över 18.
function skapaNy(talLista){
const nyLista = [];

    // lös uppgiften med loop
    for(let i=0; i<talLista.length; i++){
        if(talLista[i]>18){
            nyLista.push(talLista[i])
        }
    }
    console.log(nyLista);

    // lös uppgiften med filter
    let tredjeLista = talLista.filter(x => x > 18)
    console.log(tredjeLista)
}



// 10 Skapa en ny array som bara innehåller nummer mellan x och y. x och y väljer ni själva.
function filtrera(talLista){
const egetFilter = [];
let input = 0;
    for(let i=0; i<2; i++){
    input = Number(prompt(`Ange tal ${i+1}`))
    if(!isNaN(input)){
        egetFilter.push(input)
    }else{
        alert('Ogiltigt tal. Försök igen')
        i--;
    }
}
    egetFilter.sort((a, b) => a - b);
const filtreradLista = talLista.filter(num => num > egetFilter[0] && num < egetFilter[1])

console.log(filtreradLista)
return filtreradLista;
}


// 11 Skapa en ny array som är ursprungsarrayen fast omvänd. (reverse the array)
function reverseArray(talLista){
    const nyLista = [...talLista].sort((a,b)=> b-a)
    console.log(talLista)
    console.log(nyLista)
    return nyLista; 
}


// 12 Skapa en ny array som är ursprungsarrayen sorterad i stigande ordning.
function ascArray(talLista){
    const nyLista = [...talLista].sort((a,b)=> a-b)
    console.log(nyLista)
    return nyLista; 
}
