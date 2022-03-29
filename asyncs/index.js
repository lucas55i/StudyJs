const ul = document.getElementById('users')
const url = 'https://jsonplaceholder.typicode.com/users'


fetch(url)
    .then((resp) => resp.json())
    .then(function(data) {
        console.log(data);

        return data.map(function (user){
            let li = document.createElement('li');
            li.innerHTML =  `${user.name} (${user.username})`
            ul.append(li)
        })
    })
    .catch((error) => {
        console.log('erro' + error);
    })