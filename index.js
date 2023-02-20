//Question 2
//Arithemetric
//my variables
let x = 30;
let y = 5;

//Addition
const result = x + y; 
console.log (result);

//concatnation
const str1 = 'Hello';
const str2 = 'world';
const mysentence = str1 + ' ' + str2;
console.log(mysentence);


//Subtraction
const Subtraction = x- y; 
console.log (Subtraction);


const yearOfBirth = y;
const currentYear = x;
const age = currentYear - yearOfBirth ; 
console.log (age);



//Multiplication
const Multiplication = x- y; 
console.log (Multiplication);


const rate = 0.3;
const amount = 50
const loan= rate*amount;
console.log (loan);

//Division
const Division = x/y; 
console.log (Division);

const totalDistance = 1000;
const time = 5;
const speed= totalDistance / time;
console.log (speed);


//Modulus
const remainder = x % y; 
console.log (remainder);

const num = 15;
const mod = num % 2; 
console.log (mod);

//Increment
let count = 0;
count++; 
count++; 
console.log (count);

let points= 10;
points += 1;
points++; 
console.log (points);


//Decrement
let loss = 10;
loss--; 
loss--; 
console.log (loss);

let point= 10;
point -= 1;
point--; 
console.log (point);

//Addition
let b = 10;
b = 20; // b is 20
console.log (b);

let name = 'John';
name = 'Mary'; // name is now 'Mary'
console.log (name);


//Adddition assignment
let v = 10;
v += 5; // x  now 15
console.log (v);

//Subtraction
let m = 15;
m -= 5; // 
console.log (m);

let females = 20;
females -= 10; // females are now 10
console.log (females);

//Multiplication
x *= 5; 
console.log (x);

let distance = 100;
distance *= 0.5; // 
console.log (distance);

//Multiplication
x /= 5; 
console.log (x);

x = 100;
x *= 0.5; 
console.log (x);

//             QUESTION 3

function determineMySubjects(classGroup){
    if (classGroup === "Science") {
        console.log("Physics, Chemistry, Biology, Technical Drawing, English, Mathematics");
      } else if (classGroup === "Social Science") {
        console.log("Accounting, Commerce, Marketing, Geography, English, Mathematics");
      } else if (classGroup === "Arts") {
        console.log("Government, Economics, Literature, History, English, Mathematics");
      } else {
        console.log("Invalid class group. You will take the General subjects: English, Mathematics");
      }
}
console.log(determineMySubjects("Arts"));

















