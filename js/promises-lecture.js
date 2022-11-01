fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => {
    console.log(data)
    data.map(obj => {
        console.log(obj);})
})
    .catch(error => console.error(error));


fetch('https://api.github.com/users')
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(function(data){
        console.log(data);
        data.map(function(obj){
            console.log(obj);
        })
    }).catch(error => console.error(error));

const githubPromise = fetch('https://api.github.com/repositories');
const bitbucketPromise = fetch('https://api.bitbucket.org/2.0/repositories');

Promise.all([githubPromise, bitbucketPromise])
    .then(function(data) {
        console.log(data)
        let jsonified;
        data.map((response) =>{
            jsonified = response.json()
            console.log(jsonified)
        })
        return data.json()

        // here data is an array of the resolved values from each promise
        // we can now do something with both pieces of data
    })
    .then(jsonData => {console.log(jsonData)})
    .catch(function(error) {
        // handle errors
        console.log(error)
    });
Promise.race([githubPromise, bitbucketPromise])
    .then(function(data) {
        console.log(data)
        let jsonified;
        data.map((response) =>{
            jsonified = response.json()
            console.log(jsonified)
        })
        return data.json()

        // here data is an array of the resolved values from each promise
        // we can now do something with both pieces of data
    })
    .then(jsonData => {console.log(jsonData)})
    .catch(function(error) {
        // handle errors
        console.log(error)
    });



const myPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve();
    } else {
        reject();
    }
});

myPromise.then(()=> alert("resolved"))
myPromise.then(()=> alert("rejected"))