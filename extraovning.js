const numbers = [1, 5, 67, 14, 34, 21, 80, 7, 9, 28, 44, 23, 12, 10, 63, 102]

// LOOP
function flyttaBak(talLista){
    let mittIndex = Math.round((talLista.length-1)/2)
    let fyraForsta = talLista.slice(0, 4)
    talLista.splice(0, 4)
    for(let i=0; i<fyraForsta.length; i++){
        talLista.splice(mittIndex+i, 0, fyraForsta[i])
    }
console.log(talLista)
}

// flyttaBak(numbers);



// ...SPREAD
function flyttaBak(talLista){
    let mittIndex = Math.round((talLista.length-1)/2)
    let fyraForsta = talLista.slice(0, 4)
    talLista.splice(0, 4)
    talLista.splice(mittIndex, 0, ...fyraForsta)
console.log(talLista)
}

// flyttaBak(numbers);





function whatever(){
    return arguments
}


console.log(whatever('a','b'));