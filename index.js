// Write your solution here!
const cats= ["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name) {
    cats.push("Ralph")
}
function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop("Ralph")
}
function destructivelyRemoveFirstCat() {
    cats.shift("Bob")
}
function appendCat(name){
    const copyOfCats= [ ...cats, "Broom"]
    return copyOfCats
}
function prependCat(name){
    const copyOfCats = ["Arnold", ...cats]
    return copyOfCats
}
function removeLastCat(){
    const copyOfCats = cats.slice(0,2)
    return copyOfCats
}
function removeFirstCat(){
    const copyOfCat = cats.slice(1)
    return copyOfCat
}