const Sequelize = require("sequelize");
const sequelize = new Sequelize('livro','root','1F@miliasempre',{
    host:"localhost",
    dialect:"mysql",
}); 

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    } 
})

//Postagem.sync({force: true})
// Postagem.create({
//     titulo: "Um titulo qualquer",
//     conteudo: "Ola mundo tudo bem, espero que sim!.."
// })

const Usuarios = sequelize.define('usuarios',{
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    },
})

//Usuarios.sync({force: true})
// Usuarios.create({
//     nome: "Weverson",
//     sobrenome: "Souza",
//     idade: 28,
//     email:"blablabla@gmail.com"
// })