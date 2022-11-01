// fetch(url, {headers: {'Authorization': GIT_TOKEN}})

// let getUsers = function(user) {
//     // fetch('https://api.github.com/users', {headers: {'Authorization': GIT_TOKEN}})
//     //     .then(res => res.json())
//     //     .then(json => {
//     //         let repoURL = json[0].repos_url
//             fetch(`https://api.github.com/users/${user}/repos`, {headers: {'Authorization': GIT_TOKEN}})
//                 .then(rec => rec.json())
//                 .then(repoData => {
//                     let fullName = repoData[0].full_name
//                     fetch(`https://api.github.com/repos/${fullName}/commits`, {headers: {'Authorization': GIT_TOKEN}})
//                         .then(com => com.json())
//                         .then(commitData => {
//                             console.log(commitData[0].commit.author.date)
//             })
//         })
//     // })
// }
let getUsers = (user) =>
    fetch(`https://api.github.com/users/${user}/repos`, {headers: {'Authorization': GIT_TOKEN}})
        .then(res => res.json())
        .then(repoData => {
            let fullName = repoData[0].full_name
            fetch(`https://api.github.com/repos/${fullName}/commits`, {headers: {'Authorization': GIT_TOKEN}})
                .then(cont => cont.json())
                .then(commitData => {
                    let usersLastCommit = commitData[0].commit.author.date.split("T")[0]
                    console.log(usersLastCommit);
                    return usersLastCommit
                })
        })
        .catch(error => console.error(error))

getUsers("jmkrsak")