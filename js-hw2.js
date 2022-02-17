const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];
// THESE ALL ARE METHODS ON ARRAYS
//All of these methods pass a function to
// they are going to be different what they return
// they all (except) sort do not mutate the array that called it
//**for each */
//goes through each thing and performs function
// returns undefined

let returnValue = characters.forEach((c)=>{
console.log (c.name)
})

//***MAP***
//GOES THROUGH EACH THING AND PERFORMS A FUNCTION
// THAT IT PERFORMS IT COLLECTS THE RETURN OF THAT IN 
// A NEW ARRAY AN RETURNS THAT ARRAY

let returnValueMap = characters.map((c)=>{
return {name: c.name, eye_color:c.eye_color}
console.log('return of map')
console.log(returnValueMap)


//1. Get array of all names
let name = characters.map((c)=>{
  return {name:c.name}
})

console.log(name)
//2. Get array of all heights
let height = characters.map((c)=>{
  return {height:c.height}
})
console.log(height)


//3. Get array of objects with just name and height properties
let NH = characters.map((c)=>{
  return {height:c.height, name:c.name}
})
console.log(NH)

//4. Get array of all first names
let returnValue = characters.forEach((c)=>{
    console.log (c.name.split(' ').slice(0, -1))
})
//***REDUCE***
//GOES THROUGH EACH THING AND PERFORMS A FUNCTION
// THIS FUNCTION HAS TWO PARAM, THE RETURN VALUE OF THE PREVIOUS(ACCUM)
//FUNCTION AND CURRENT ITEM
// RETURN THE FINAL RETURN OF FUNCTION (ACCUM)
let nums = [2,3,4,5,6]
let sum = nums.reduce ((accum,num)=> {
    return accum + num
}, 0)
console.log(sum)
//1. Get total mass of all characters
let sum1 = characters.reduce((accum, lbs)=>{
  console.log(accum)
  console.log(lbs.mass)
  return accum + lbs.mass
},0)

console.log(`Total LBS' ${sum1}!`)


//2. Get total height of all characters
let sum2 = characters.reduce((accum, inches)=>{
  console.log(inches.height)
  return accum + inches.height
},0)

console.log(sum2 + ', is the sum of height')


//3. Get total number of characters by eye color
let colorEye = characters.reduce((accum, char) =>{
  if(char.eye_color === 'brown'){
    accum.brown +=1
    return accum

  }
else if (char.eye_color === 'blue'){
  accum.blue +=1
  return accum
}
else if (char.eye_color === 'yellow'){
  accum.yellow +=1
  return accum
}
}, {brown:0, blue:0, yellow:0})

console.log(colorEye)



//4. Get total number of characters in all the character names
let characterNumber = characters.reduce((accum, c)=>{
  let numberChara = c.name.length-1
  return accum + numberChara
},0)

console.log(characterNumber)

//***FILTER***
//REMOVE ITEMS
//GOES THROUGH EACH THING AND PERFORMS A FUNCTION
// IF THAT RETURNS TRUE IT PUSHES THE ITEM IN THE NEW ARRAY
// IF IT RETURNS FALSE IT DOESNT
 
//1. Get characters with mass greater than 100
let over100 =characters.filter((c)=> {
return c.mass >= 100
})
console.log(over100)
//2. Get characters with height less than 200
let over100 =characters.filter((c)=> {
return c.height >= 200
})
console.log(over200)
//3. Get all male characters
let allMale = characters.filtere((c)=>{
return c.gender === 'male'
})
console.log(allMale)
//4. Get all female characters
let allFemale = characters.filtere((c)=>{
return c.gender === 'female'
})
console.log(allFemale)
//***SORT***

//1. Sort by mass
characters.sort((a,b)=>{
  if(a.mass > b.mass){
      return 1
  }
  if(a.mass < b.mass){
      return -1
  }
  return 0
})

console.log(characters)

//2. Sort by height
characters.sort((a,b)=>{
  if(a.height > b.height){
      return 1
  }
  if(a.height < b.height){
      return -1
  }
  return 0
})

console.log(characters)

//3. Sort by name
characters.sort((a,b)=>{
  if(a.name > b.name){
      return 1
  }
  if(a.name < b.name){
      return -1
  }
  return 0
})

console.log(characters)
//4. Sort by gender
characters.sort((a,b)=>{
  if(a.gender > b.gender){
      return 1
  }
  if(a.gender < b.gender){
      return -1
  }
  return 0
})

console.log(characters)


//***EVERY***
//1. Does every character have blue eyes?


//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?

//***Bonus***/
// come up with your own


