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

const filtro = pessoas.filter((pessoa => pessoa.idade < 30))
console.log("filtro => ", filtro)
