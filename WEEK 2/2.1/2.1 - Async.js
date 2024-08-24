
// setTimeout( () => {
//     console.log('Hi there')
// }, 6000 )

const { error } = require("console")

function sayHello(name){
    console.log(`Hello ${name}`)
}

// setTimeout(() => sayHello('Ashish'), 2000)


// setTimeout(function(){
//  sayHello('asi')
// }, 6000)
    
// ================================================


// Handling Fetch with .then/.catch

// const fetchData = fetch('https://randmuser.me/')
// fetchData
// .then((data)=>(console.log(data)))
// .catch((error)=>(console.log('The Generated Error is:', error)))



// ================================================

// Handling Fetch with async/await

// async function generatedData() {
//     const fetchData = await fetch('https://randomuser.me/api')
//     const data = await fetchData.json()
//     console.log(data)
// }
// generatedData()