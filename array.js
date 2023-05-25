

let origDogs = ["BullDog", "Beagle" , "Labrador"];
let cats = new Array("American Curl", "Bengal");
let birds = new Array("Falcons","Ducks","Flamingoes");

let slicedDogs = origDogs.slice(1,3);
console.log("OrigDogs =>",origDogs);
console.log("slicedDogs =>",slicedDogs);

let copyDogs = [...slicedDogs];
console.log("copy Dogs =>",copyDogs);

let dogs = origDogs.slice(1);
console.log("Dogs =>",dogs);

let pushDog = dogs.push("Golden Retriever");
console.log("push Dogs =>",pushDog);
console.log("push Dogs array =>",dogs);

let popDog = dogs.pop();
console.log("pop Dogs =>",popDog);
console.log("pop Dogs array =>",dogs);
// console.log(dogs[4]);

dogs[dogs.length] = "Poodle";
console.log(dogs.length)
console.log("Dogs =>",dogs);

let addFirst = dogs.unshift("Golden Retriever");
console.log("add first Dogs =>",dogs);
console.log("add first =>",addFirst);

let shiftDog = dogs.shift();
console.log("shiftDog  =>",shiftDog);
console.log("Dogs =>",dogs);

let addFirst1 = dogs.unshift("Golden Retriever");
console.log("Dogs =>",dogs);

dogs.splice(0,2,"Pug","Boxer","Husky");
console.log("Dogs =>",dogs);

let animals = dogs.concat(cats,birds);
console.log("animals",animals);

let newAnimal = [...dogs,...cats,...birds].toString();

console.log("new animals  ==>> ",newAnimal);

let sortDog = dogs.sort();
console.log("Sort Dogs =>",sortDog);

function sArray([a,b,c,d]){
    
  console.log("Scan: "+a+ " "+b+ " "+ c + " " + d);
}
sArray(animals);

let joinArray = animals.join(" # ");
console.log("join array ",joinArray);

let allAnimals = "";

for (let animal of animals) {
  allAnimals= allAnimals + animal+" ";
}
console.log("All animals",allAnimals)