const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let filterLanguages = users.filter((e) => e.languages.length >= 3)
console.log(filterLanguages);

let usersEmail = users.map((e) => e.email)
console.log(usersEmail);

let yearsExp = users.reduce((x, e) => x + e.yearsOfExperience, 0)
console.log(yearsExp);

let longestEmail = users.reduce((x, e) => x.email.length > e.email.length ? x : e).email
console.log(longestEmail);

let userNameStr = users.reduce((x, e) => x.push(e.name) ? x)
console.log(userNameStr);

