function TempConversion(temperature,tempretureconversion ){
let convertedTemperature;
//let temperature;
// take 1 for Celsius to Fahrenheit conversion and 2  for Fahrenheit to celcius conversion 
//let tempretureconversion;
switch(tempretureconversion){
    case 1:
        if (temperature >= 0 && temperature <= 100) {
            convertedTemperature = (temperature * 9 / 5) + 32;
            console.log(`${temperature} °C is equal to ${convertedTemperature} °F`);
          } else {
            console.log("Invalid input. Temperature should be within the freezing point (0 °C) and the boiling point of water (100 °C).");
          }
          break;
    case 2:
        if(temperature >=32 && temperature <=212){
        convertedTemperature =(temperature - 32) * 5/9;
        console.log("${temprature} °F is equal to ${convertedTemperature} °C ");
        } else {
            console.log("Invalid input. Temperature should be within the melting (0 °C) and the boiling point of water (100 °C).");
          }
          break;  
    default:
    console.log("Invalid input. Please enter a valid conversion selection (1 or 2).");
}  
}
TempConversion(36,1);

function isPalindrome(number1,number2){
    var temp = number1;
    var reverse = 0;
    var remainder =0;
    var reversedNumber = number2;
    while(temp > 0){
        remainder = temp%10;
        reverse = reverse*10 + remainder;
        temp =Math.floor(temp/10);
}
console.log(reverse);
    if(reverse==reversedNumber){
        console.log("The numbers are palindrome");
    }else{
        console.log("The numbers are not palindrome");
    }
}
isPalindrome(351,152);