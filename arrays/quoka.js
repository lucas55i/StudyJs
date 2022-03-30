// const tags = new Set([]);

// tags.add('js')
// tags.add('js')
// tags.add('pedro')
// tags.add('lucas')
// tags.add({ nome: 'lucas' })

// const result = Array.from(tags)

// console.log(result)

const listaDeUsuarios = [
    { name: "lucas", userename: "jesusLucas" },
    { name: "lucas", userename: "jesusLucas" }
]

const newUser = { name: "lucas", userename: "jesusLucas" };
const hasUser = listaDeUsuarios.find((user) => {
    return user.userename === newUser.userename
});

if (!hasUser) {
    listaDeUsuarios.push(newUser);
}

const result = listaDeUsuarios

console.log(result)