// Write a function that takes an array of objects and a string as arguments. Add a property with key ‘continent’ and value equal to the string of each of the objects. Return the new array of objects. Don’t mutate the original array.

// example input: [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'
// expected output: [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

function addProperty(obj, keys) {
    // your code here
    let objs = [{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }]
    for (let key in keys) {
        obj[key] = keys[key]
    }
    return obj
}

console.log(addProperty({"name": "hi", "age": 69}))

// re-write the following using a for loop: var i = 20; while (i >= 0) { console.log(i); i--; }
//



//
// Add ‘strawberry’ to the beginning, middle, and end of the array. var fruits = ["mango", "blueberries", "oranges", "banana", "papaya", "kiwi"];

