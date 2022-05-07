// Add your code here
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle"
// }
// const configObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//     },
//     body: JSON.stringify(formData)
// };

// fetch("http://localhost:3000/dogs", configObject)
//     .then(function (response) {
//         return response.json()
//     })
//     .then(function (object) {
//         console.log(object)
//     })
//     .catch(function (error) {
//         alert("Bad Thing!!")
//         console.log(error.message)
//     })

function submitData(userName, userEmail){
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    })
    .then((response) => response.json())
    .then(function (json){
        const newElement = document.createElement("div")
        const newUser = json.id
        document.body.append(newElement)
        newElement.textContent = newUser

    })
    .catch(function(error){
        const newError = document.createElement("div")
        newError.textContent = error.message
        document.body.append(newError)
    })
}

submitData("amber", "myEmail")