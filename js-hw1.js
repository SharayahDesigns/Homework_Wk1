//--------------------- Loops-------------------------------------

// 1. Write a for loop that logs only logs even numbers from 0 - 10; ie 0,2,4,..10
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  } 
}
// 2. Write a for that logs numbers from 10 - 0; ie 10,9,8...0
for (let i = 10; i >= 0; i--){
console.log(i)}


// 3. write a for loop that loops through this array and logs 'odd/even' based on wether the number is odd even
for (let i = 1; i <= 20; i++) {
  if(i % 2 == 0) {
      console.log('Even: ' + i);
 } else {
      console.log('ODD: ' + i);
}
}


let nums = [1,2,3,4,5,6,7,8,9,10]

// 4. write a while loop that starts at 0 and counts up to 10 ie: 0,1,2,3....10

let i = 0;
while (i <= 10) {
console.log(i)
i++;
}


// 5. Look closely at the code below

const isOdd = (num) => {
    return num % 2 === 0
}

if(isOdd(num='2')){
    console.log(num + 'is Even')
} else {
    console.log(num +'is Odd')
}
console.log(isOdd)
// 6. what will this log?
     

// 7. what is the value of isOdd(2) 
//is Even
// 8. Fix the isOdd function to make this work
//2is Even

//----------------------- Functions---------------------------

// 1. Write a function that takes a positive number and prints all even numbers from 0 – number
 const printUpto = (num)=> {
for(let i= 0; i<= num; i++){
if(i % 2 === 0){
printUpto(10);
console.log(i)}
}

}



// 2. Write a function that takes an array and returns the sum of all the numbers
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = array.reduce(function(a, b){
return a + b;
} , 0);

console.log(sum);


// 3. Write a function that returns the number of vowels in string
let str=('Love is a many splendid thing');
const vowels = ["a", "e", "i", "o", "u"]
function countVowel(str) {
    let count = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }
    return count
}

const result = countVowel(str);
console.log(result);


// 4. Write a function that takes a math operator, as a string, ('*','/','+','-') and two numbers and returns the result
function math(opp, num1, num2){
if(opp === '+'){
return num1 + num2
} else if (opp === '-'){
return num1 - num2
} else if (opp === '*'){
return num1 * num2
} else if (opp === '/'){
return num1 / num2
}
}
console.log(math('+',2,3))


// 5. Write a function that takes an array of strings and a string and returns true or false if the string is in the array.

let superHero = ['Batman', 'Superman', 'wonderwoman']
console.log(superHero.includes('Spiderman'));
console.log(superHero.includes('Superman'));


// 6. write a function that takes a person object {firstname: 'joe', lastname: 'shmoe', age: 50} and returns a formatted string "joe shmoe is 50 years old"

let firstName = ['Bob']
let lastName = ['Buttkiss']
let age = 69

console.log(firstName + ' '+ lastName + ' '+ "is" + ' '+ age + ' '+ "years old")

or ...

console.log ('${firstName} ${lastName} is $(age) years old')

// 7. write a function that takes an array that removes the first and last items and return that new array
let superHeros= ['Superman', 'Catwoman', 'Spiderman', 'DarthVader']
superHeros.pop();
superHeros.shift()
console.log(superHeros);

// 8. write a function that swaps the last and first items of an array 
let bodyParts = ['head' ,'shoulders' ,'knees' , 'toes']
const swap = (bodyParts)=>{
    let firstItem = bodyParts[0]
    let lastItem = bodyParts[bodyParts.length-1]
bodyParts[bodyParts.length-1] = firstItem
bodyParts[0] = lastItem
}
console.log('Body Parts before swap', bodyParts)
swap(bodyParts)
console.log('Body Parts swap', bodyParts)

// 9. write a function that takes a array and a second argument and returns the index in the array of the second argument
let colors = ['pink', green, white, black]
let newColor =[blue]
function 
 

// 10. write a function that takes a number and uses a ternary to return if the number is odd or even.
var age = 26;
var drinkingAge = (age >= 21) ? "True" : "Fasle";
console.log(drinkingAge);

// 11. Write a function that prints all  numbers from 0 – 10
const print10 = (num)=>{
  for(let i = 0; i<= num; i++){
      console.log(i)
      }
  }

print10(10)
