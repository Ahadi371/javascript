//pre increment 
let a = 3;
let b = 4;
let regult = a+ ++b;
console.log(regult)
let c = 9;
let d = 8;
c =c +regult++;
let cd = c + --d;
console.log(cd)

// post-increment
let x = 25;
let y = 10;
let z = x + y++;
console.log(z);
let p = 25;
let q = 10;
let pq = p + q--;
console.log(pq);


// pre and post-increment

let numbarOne = 500;
let numbarTwo = 200;
numbarTwo += ++c
let numbarThree = 300;
let some = numbarOne + ++numbarTwo + numbarThree++
console.log(some)

// Apply arithmetic peration qu-no-02
let numberOne = "10"
let convertedNumOne = parseInt(numberOne)
console.log(convertedNumOne);
let numberTwo = "2"
let convertedNumTwo = parseInt(numberTwo)
console.log(convertedNumTwo);
let plus = convertedNumOne+convertedNumTwo
let minus = convertedNumOne-convertedNumTwo
let multiplication =  convertedNumOne*convertedNumTwo
let division =  convertedNumOne/convertedNumTwo
let modulas =  convertedNumOne%convertedNumTwo
let greterThen = convertedNumOne>convertedNumTwo
let lasThen = convertedNumOne<convertedNumTwo
console.log(plus,minus,multiplication,division,modulas,greterThen,lasThen)
// Apply arithmetic peration pu-no-03

let stringOne = "10"
let stringTwo = 2;
let stringPlus = stringOne+" "+ stringTwo //10 2
let stringMinus = stringOne-stringTwo//nan
let stringMultiplication = stringOne*stringTwo//210 rakim
let stringDivision = stringOne/stringTwo//5 samim bai
let stringModulas = stringOne%stringTwo//nan mahin/0 nadim bai
console.log(stringPlus,stringMinus,stringMultiplication,stringDivision,stringModulas);