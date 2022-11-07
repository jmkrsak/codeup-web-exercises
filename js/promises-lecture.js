// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(data => {
//     console.log(data)
//     data.map(obj => {
//         console.log(obj);})
// })
//     .catch(error => console.error(error));
//
//
// fetch('https://api.github.com/users')
//     .then(function(response){
//         console.log(response);
//         return response.json();
//     })
//     .then(function(data){
//         console.log(data);
//         data.map(function(obj){
//             console.log(obj);
//         })
//     }).catch(error => console.error(error));
//
// const githubPromise = fetch('https://api.github.com/repositories');
// const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');
//
// Promise.all([githubPromise, bitbucketPromise])
//     .then(function(data) {
//         console.log(data)
//         let jsonified;
//         data.map((response) =>{
//             jsonified = response.json()
//             console.log(jsonified)
//         })
//         return data.json()

        // here data is an array of the resolved values from each promise
        // we can now do something with both pieces of data
//     })
//     .then(jsonData => {console.log(jsonData)})
//     .catch(function(error) {
//         // handle errors
//         console.log(error)
//     });
// Promise.race([githubPromise, bitbucketPromise])
//     .then(function(data) {
//         console.log(data)
//         let jsonified;
//         data.map((response) =>{
//             jsonified = response.json()
//             console.log(jsonified)
//         })
//         return data.json()

        // here data is an array of the resolved values from each promise
        // we can now do something with both pieces of data
    // })
    // .then(jsonData => {console.log(jsonData)})
    // .catch(function(error) {
        // handle errors
//         console.log(error)
//     });
//
//
//
// const myPromise = new Promise((resolve, reject) => {
//     if (Math.random() > 0.5) {
//         resolve();
//     } else {
//         reject();
//     }
// });
//
// myPromise.then(()=> alert("resolved"))
// myPromise.then(()=> alert("rejected"))

// ----------- POST REQUEST

// fetch('https://api.github.com/users')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data)
//         data.map(obj => {
//             console.log(obj);})
//     })
//     .catch(error => console.error(error));

// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }


// fetch('https://jsonplaceholder.typicode.com/post', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         userId: 498,
//         id: 978,
//         title: "My newly added blog post",
//         body: "codeup is awesome, and I love to code!"
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//
// // ----------- DELETE BLOG
// fetch('https://jsonplaceholder.typicode.com/post/1', {
//     method: 'DELETE',
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//
// // ----------- PUT/PATCH
// fetch('https://jsonplaceholder.typicode.com/post/5', {
//     method: 'PUT',
//     body: JSON.stringify({
//         title: "My awesome blog post",
//         body: "codeup is awesome, and I love to code!"
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))




// uncomment here after practice
// fetch('https://dog.ceo/api/breeds/image/random')
//     .then(response => response.json())
//     .then(data => {
//         let imgStr = data.message
//         console.log(imgStr);
//         function returnImg () {
//             let html = ``;
//             html += `<img src="${imgStr}">`;
//             $('#image').append(html)
//         }
//         returnImg()
//     })
//     .catch(error => console.error(error));
//
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         userId: 498,
//         title: "My newly added blog post",
//         body: "codeup is awesome, and I love to code!"
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//
// fetch('https://jsonplaceholder.typicode.com/posts/978', {
//     method: 'DELETE',
// })
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
http://www.omdbapi.com/?t=step+brothers
fetch(`http://www.omdbapi.com/?t=step+brothers&apikey=${OMDB_KEY}&`)
    .then(response => response.json())
    .then(data => {
        console.log(data);

    })
    .catch(error => console.error(error));