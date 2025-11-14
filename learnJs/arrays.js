

//non Primitive Datatypes 

arrayname = []  // Empty - without elements 

arr = [3,4,5] //Homogenious 

arr2 = ["Raju", 32, "blr", true, { firstname : "Raju", lastname: "G"}, undefined, null] // Hetirogenious 


//Index of elements always starts from 0
console.log(arr2[0])

//.length

//count of how many elements are Present in a array 

console.log(arr.length)



// str = "Playwright"
// str2 = "Javascript"

// finalstr = str+str2
// console.log(finalstr)

//concat

finalarr = arr.concat(arr2)

console.log(finalarr)

//sort()

arr3 = [9,3,7,4,5,8]

arr4 = arr3.sort()

console.log(arr4)

arr5 = ["avinash", "vidya", "bindu", "Kalyani", 9,3, true]

arr6 = arr5.sort()

console.log(arr6)

// reverse()

// reverse the array elements 

//[ 3, 9, 'Kalyani', 'avinash', 'bindu', true, 'vidya' ]

arr7 = arr6.reverse()

console.log(arr7)

arr = [2,4,8,5,9].sort().reverse()

console.log(arr)

// split()

// converts the string to array


str = "Playwright"
arr8 = str.split("")
console.log(arr8)

str = "this is a Javascript class".split("")

console.log(str)


str3 = "Playwright".split("").sort().reverse()

console.log(str3)

// join()

//to convert array to string 

arr = ["vidya", "chethana", "supriya"].join("")

console.log(arr)


// Push 
// Push will add elements to array at the end 

// unshift
//Unshift will add elements to array at beginning

arr = ["vidya", "chethana", "supriya"]

arr.push("krish", "chithambar")

arr.unshift("Vinuthna", "Kalyani")

console.log(arr)

// Pop 
//shift 

arr.pop() // it will last element \
arr.pop() 
arr.pop() 
arr.shift()
arr.shift()
console.log(arr)

//includes()
// will check element is present in the array or not and returns true or false

ar1 = [
  'Vinuthna',
  'Kalyani',
  'vidya',
  'chethana',
  'supriya',
  'krish',
  'chithambar'
]

ar1.includes("Raju") // False 

ar1.includes("krish")  // true 

console.log(ar1.includes("vidya"))//




ar2 = [
  'Vinuthna',
  'Kalyani',
  'vidya',
  'chethana',
  'supriya',
  'krish',
  'chithambar'
]

ar2[3] = "Bindu"

console.log(ar2)

// slice

//splice()

//filter

//map 

//reduce