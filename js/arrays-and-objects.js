// 1. Write a function, `filterNumbers()` that takes in an array of mixed data
// types and returns an array of only the numbers type in ascencding order.
//
//     Example input: `["fred", true, 5, 3]`
// Example output: `[3, 5]`
let arrOne = ["fred", true, 5, 3]
function filterNumbers(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i])
        }
    }
    return newArr.sort()
}
console.log(filterNumbers(arrOne));
// 1. Write a function, `getOlder()` that takes in array of dog objects and
// increases the value of each object's `age` property by 1.
//
//     Example input:
//
let arrOfObj = [
    {
        name: "Chompers",
        breed: "Pug",
        age: 7
    },
    {
        name: "Freddy",
        breed: "Lab",
        age: 4
    },
    {
        name: "Mr. Pig",
        breed: "Mastif",
        age: 10
    }
]
function getOlder(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].age++
    }
    return arr
}
console.log(getOlder(arrOfObj));
//
//     Example output
//
//         [
//             {
//                 name: "Chompers",
//                 breed: "Pug",
//                 age: 8
//             },
//             {
//                 name: "Freddy",
//                 breed: "Lab",
//                 age: 5
//             },
//             {
//                 name: "Mr. Pig",
//                 breed: "Mastif",
//                 age: 11
//             }
//         ]
//
// 1. Write a function, `washCars()` that takes in a array of car objects and sets
// the boolean properties of `isDirty` to false.
//
//     Example input:
//
let arrOfObjTwo = [
    {
        make: 'Volvo',
        color: 'red',
        year: 1996,
        isDirty: true
    },
    {
        make: 'Toyota',
        color: 'black',
        year: 2004,
        isDirty: false
    },
    {
        make: 'Ford',
        color: 'white',
        year: 2007,
        isDirty: true
    }
]
function washCars(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isDirty === true) {
            arr[i].isDirty = false
        }
    }
    return arr
}
console.log(washCars(arrOfObjTwo));
//
//     Example output
//
//         [
//             {
//                 make: 'Volvo',
//                 color: 'red',
//                 year: 1996,
//                 isDirty: false // changed to false
//             },
//             {
//                 make: 'Toyota',
//                 color: 'black',
//                 year: 2004,
//                 isDirty: false // stays the same
//             },
//             {
//                 make: 'Ford',
//                 color: 'white',
//                 year: 2007,
//                 isDirty: false // changed to false
//             }
//         ]
//
// 1. Write a function, `adminList()` that takes in an array of user objects and
// returns a count of all admins based on the `isAdmin` property. Refactor to
// return an array of admin-only user emails. Refactor again to return an array
// of user objects that are admins.
//
//     Example Input:
//
let arrOfObjThree = [
    {
        isAdmin: true,
        email: 'user1@email.com'
    },
    {
        isAdmin: true,
        email: 'user2@email.com'
    },
    {
        isAdmin: false,
        email: 'user3@email.com'
    }
]
function adminListThree(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isAdmin === true) {
            newArr.push(arr[i]);
        }
    }
    return newArr
}
console.log(adminListThree(arrOfObjThree));

function adminListTwo(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isAdmin === true) {
            newArr.push(arr[i].email);
        }
    }
    return newArr
}
console.log(adminListTwo(arrOfObjThree));

function adminList(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].isAdmin === true) {
            sum++
        }
    }
    return sum
}

console.log(adminList(arrOfObjThree));
//
//     Example Output (before refactor): `2`
//
//     Example Output (after 1st refactor):
//
//         [
//             'user1@email.com',
//             'user2@email.com'
//         ]
//
//     Example Output (after 2nd refactor):
//
//         [
//             {
//                 isAdmin: true,
//                 email: 'user1@email.com'
//             },
//             {
//                 isAdmin: true,
//                 email: 'user2@email.com'
//             }
//         ]
//
// 1. Create a function, `makeSandwhichObjects()` that takes in two array of
// strings, breads and fillings and returns an array of `sandwhichObjects` that
// contain properties for bread and filling and values correspond to the same
// order of the two passed in arrays. Assume the two array inputs are the same
// length.
//
//     Example Input:
//
// ```js
    var breads  = [
      "white",
      "wheat",
      "rhy",
      "white"
    ];

    var fillings = [
      "pb&j",
      "ham",
      "cheese steak",
      "tuna"
    ];
function makeSandwhichObjects(arr1, arr2){
    let arrOfObj = []
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i])
        console.log(arr2[i])
        arrOfObj.push({
            bread: arr1[i],
            filling: arr2[i]
        })
    }
    return arrOfObj
}
console.log(makeSandwhichObjects(breads, fillings));
//     ```
//
//     Example Output:
//
// [
//     {
//         bread: "white,
//         filling: "pb&j"
//     },
//     {
//         bread: "wheat",
//         filling: "ham"
//     },
//     {
//         bread: "rhy",
//         filling: "cheese steak"
//     },
//     {
//         bread: "white",
//         filling: "tuna"
//     }
// ]