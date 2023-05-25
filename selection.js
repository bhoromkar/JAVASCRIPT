var val1 =Math.floor(Math.random()*(901)+100);
var val2 =Math.floor(Math.random()*901+100);
var val3 =Math.floor(Math.random()*901+100);
console.log(val1);
console.log(val2);
console.log(val3);
if(val1>val2 && val1>val3){
console.log(val1 +  " is a maximum" );
} else if(val2>val1 && val2>val3) {
    console.log(val2 +  " is a maximum" );
}else{
    console.log(val3 +  " is a maximum" );
}


//const month = prompt("Enter a value:");
//console.log("User input:" ,month);
//const day = prompt("Enter a value:");
//console.log("User input:", day);
//const day = parseInt(process.argv[2]);
//const month = parseInt(process.argv[3]);
const day = 7 ;
const month=5;

// Check if the day of the month is between March 20 and June 20
if (
  (month === 3 && day >= 20 && day <31) ||
  (month > 3 && month < 6 && day < 31) ||
  (month === 6 && day <= 20 && day< 31)
) {
  console.log(true);
} else {
  console.log(false);
}

const coin =Math.floor(Math.random()*2);
console.log(coin);
if(coin==1){
    console.log("head");
}else{
    console.log("tail");
}
const digit= 2;
if (digit == 1) {
    console.log("one");
} else if (digit == 2) {
    console.log("two");
} else if (digit == 3) {
    console.log("three");
} else if (digit == 4) {
    console.log("four");
} else if (digit == 5) {
    console.log("five");
} else if (digit == 6) {
    console.log("six");
} else if (digit == 7) {
    console.log("seven");
} else if (digit == 8) {
    console.log("eight");
} else if (digit == 9) {
    console.log("nine");
} else {
    console.log("none");
}


 const num = 256;
if (num <= 9) {
    console.log("unit");
} else if (num <= 99) {
    console.log("ten");
} else if (num <= 999) {
    console.log("hundred");
} else if (num <= 9999) {
    console.log("thousand");
} else {
    console.log("none");
}