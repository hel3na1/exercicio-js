const pessoas = [
    {
        nome: 'helena', 
        idade: 20
    },
    {
        nome: 'yure', 
        idade: 23
    },
    {
        nome: 'jurema', 
        idade: 24
    },

    {
        nome: 'pedro', 
        idade: 34
    },

    {
        nome: 'maria', 
        idade: 45
    },

    {
        nome: 'joao', 
        idade: 98
    },
]

const pessoasVelhas = pessoas.map((pessoa) => {
    if (pessoa.idade > 30) {
        return pessoa
    }
})

const todasPessoas = pessoas.map((pessoa) => {
    return pessoa
})

console.log("pessoas => ", pessoas)
console.log("pessoasVelhas => ", pessoasVelhas)
console.log("todasPessoas => ", todasPessoas)