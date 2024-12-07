const arrays = [ 
    42,
    true,
    "Hello World!",
    {
        name: "Usama",
        age: 24,
        isStudent: false,
    },
    false,
    3.14,
    "JavaScript is fun!",
];


const stringArray = arrays.map((item)=>{
    item.toString(); 
})
console.log(stringArray);

// const stringArray = arrays.map(item => item.toString());

// console.log(stringArray);


// Q.1 Completed





// Filter only number elements:

// const numbers = arrays.filter(item => typeof item === "number");

// console.log(numbers)


// Q.2 Completed





