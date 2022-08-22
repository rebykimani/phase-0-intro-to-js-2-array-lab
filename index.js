// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat (name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}


function destructivelyRemoveLastCat(){
    return cats.pop();
}


function destructivelyRemoveFirstCat(){
    return cats.shift();
}


function appendCat(name){
    let newCats = cats.slice()
    newCats.push(name)
    return newCats;
}


function prependCat(name){
    let xCats = cats.slice()
    xCats.unshift(name)
    return xCats;
}


function removeLastCat(){
    let x = cats.slice()
    x.pop()
    return x;
}


function removeFirstCat(){
    let y = cats.slice()
    y.shift()
    return y
}