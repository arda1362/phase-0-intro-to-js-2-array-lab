const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop("Garfield");
}
function destructivelyRemoveFirstCat() {
    cats.shift("Milo");
}
function appendCat() {
    return [...cats, "Broom"];
}  

function prependCat(name) {
    const Cats = cats.slice();
    Cats.unshift("Arnold");
    return Cats;
}

function removeLastCat(name) {
    const Cats = cats.slice();
    Cats.pop(name);
    return Cats;}

    function removeFirstCat(name){
        const Cats = cats.slice(); 
        Cats.shift(name);
         return Cats;}
         


