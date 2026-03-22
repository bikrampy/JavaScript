let response = fetch('https://api.github.com/users/bikrampy')
response.then(
    (result) => result.json()
)
.then(
    (result2) => console.log(result2)
)
.catch((error) => 
    console.log(error)
)