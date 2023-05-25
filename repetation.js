let num= 131;
let count = 0;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      count++;
      break;
    }
}
console.log(count);
if(count>0){
    console.log("the number is not prime");
}else{
    console.log("the number is prime");
}


var number = 5;
var factorial =1;{
for(let index =1; index <=number; index++) {
    factorial = factorial*index;
    }
    console.log(factorial);
}

var tail=0;
while(tail<11){
const coin =Math.floor(Math.random()*2);
if(coin==1){
    tail++;
    console.log(tail);
}
}let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
  const random = (Math.random()*2); 

  if (random <1) {
    
    headsCount++;
    console.log("Heads");
  } else {
    
    tailsCount++;
    console.log("Tails");
  }
}

if (headsCount === 11) {
  console.log("Heads wins!");
} else {
  console.log("Tails wins!");
}

const n =7;

if (isNaN(n) || n < 0) {
  console.log("Invalid input. Please provide a non-negative integer.");
} else {
  let power = 0;
  let result = 1;

  while (result <= 256 && power <= n) {
    console.log(`2^${power} = ${result}`);
    power++;
    result *= 2;
  }
}


