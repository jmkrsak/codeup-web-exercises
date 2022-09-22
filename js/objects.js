(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Ken",
        lastName: "Howell,"
    }
    console.log(person.firstName);
    console.log(person.lastName);
    console.log(person);

    // var person = {
    //     firstName: "John-Micahel",
    //     lastName: "Krsak",
    // }
    // console.log(person.firstName)
    // console.log(person.lastName)

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    person.sayHello = function(){
        console.log(`Hello from ${this.firstName} ${this.lastName}!`);
    }

    person.sayHello();

    // person.sayHello = function() {
    //     return `Hello ${person.firstName} ${person.lastName}`
    // }
    // console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function hebOffer(arrayOfShoppers){

        arrayOfShoppers.forEach(function (shopper){

        if(shopper.amount > 200) {
            console.log(`${shopper.name}, you qualified for our offer! You purchased $${shopper.amount} which earns a 12% discount. Your discount is $${shopper.amount * .12} which gives you a new total $${shopper.amount - (shopper.amount * .12)}`);
        } else {

            console.log(`${shopper.name} we were running a discount today if you bought over $200 - unfortunately, your total was $${shopper.amount} and you did not qualify. Perhaps you should go get some more items?`);
        }
        })

    }

    hebOffer(shoppers)


    // shoppers.forEach(function(x){
    //     if (x.amount > 200){
    //         let discount = 0.12 * x.amount;
    //         let afterDiscount = x.amount - discount;
    //         console.log(x.name + " bought products for " + x.amount + "." + " His discount is: " + discount + " and will pay " + afterDiscount + " after the discount.");
    //     } else {
    //         let discount = 0;
    //         let afterDiscount = x.amount;
    //         console.log(x.name + " bought products for " + x.amount + "." + " His discount is: " + discount + " and will pay " + afterDiscount + " after the discount.")
    //     }
    // });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

    // let books = [
    //     {
    //         title: "Franny and Zoey",
    //         author: {
    //             firstName: "J.D.",
    //             lastName: "Salinger",
    //         }
    //     }, {
    //         title: "Franny and Zoey",
    //         author: {
    //         firstName: "J.D.",
    //             lastName: "Salinger",
    //     }, {
    //         title: "Franny and Zoey",
    //             author: {
    //             firstName: "J.D.",
    //                 lastName: "Salinger",
    //         }, {
    //             title: "Franny and Zoey",
    //                 author: {
    //                 firstName: "J.D.",
    //                     lastName: "Salinger",
    //             },
    //             {
    //                 title: "Franny and Zoey",
    //                     author
    //             :
    //                 {
    //                     firstName: "J.D.",
    //                         lastName
    //                 :
    //                     "Salinger",
    //                 }
    //             ,
    //             }]

    var books = [
        {title: "Anna Karenia",
            author:{
            firstname: "Leo",
                lastname: "Tolstoy",
            }},
        {title: "Madame Bovary",
            author:{
            firstname: "Gustav",
                lastname: "Flaubert",
            }},
        {title: "Lolita",
            author:{
            firstname: "Vladimir",
                lastname: "Nabokov",
            }},
        {title: "Hamlet",
            author:{
            firstname: "William",
                lastname: "Shakespeare",
            }},
        {title: "In Search of Lost Time",
            author:{
            firstname: "Marcel",
                lastname: "Proust",
            }}
    ];
console.log(books);
//
//     books.forEach(function(book){
//         console.log(book.title + " is the title of this book");
//         console.log("Author's first name: " + book.author.firstname);
//         console.log("Author's last name: " + book.author.lastname);
//     })

    for(let i = 0; i < books.length; i++){
        console.log(`Book # ${i + 1}`);
        console.log(`Title: ${books[i].title}`);
        console.log(`Author: ${books[i].author.firstname} ${books[i].author.lastname}`);

    }

    books.forEach(function
        (book, index){
        console.log(`Book # ${index + 1}`);
        console.log(`Title: ${book.title}`);


    })

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    // for (let i = 1; i <= 5; i++){
    //     console.log("Book # " + i);
    //     console.log("Title: " + books[i-1].title);
    //     console.log("Author: " + books[i-1].author.firstname + " " + books[i-1].author.lastname);
    // }

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

    function createBook(bookTitle, author){
        let authorName = author.split(" ")

        return {title: bookTitle,
        author: {
            firstName: authorName[0],
            lastName: authorName[1],
        }}
    }

    let books2 = [];

//     function createBook(tit, fn, ln){
//         console.log(tit, fn, ln);
//         return books.push(
//             {title: tit,
//                 author: {
//                     firstname: fn,
//                     lastname: ln,
//                 }
//         })
//     }
// createBook("food", "John", "Michael");

    // function showBookInfo (a)
})();