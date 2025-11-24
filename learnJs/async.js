

// function step1(value) {
//     return new Promise((resolve, reject) => {
//       // Simulating the callback behavior
//       resolve(value + 10); // Resolving the promise with the result
//     });
//   }



function add(num1, num2){

       return new Promise((resolve, reject) => {
      // Simulating the callback behavior
      resolve(num1+num2); // Resolving the promise with the result
    });
}


function substrct(num1, num2){

       return new Promise((resolve, reject) => {
      // Simulating the callback behavior
      resolve(num1-num2); // Resolving the promise with the result
    });
}


// console.log(add(3,8))

// p = add(3,8)

// p.then(value => console.log(value))

async function result(){

    value1 = await add(4,9)

    console.log(value1)

    value2 = await substrct(45,30)

   
    console.log(value2)

}

result()


// page.goto("Url")