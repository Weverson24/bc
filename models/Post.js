const db = require('./db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

module.exports = Post
// Post.sync({force: true}) APENAS INVOQUE ISSO APENAS UMA VEZ SEMPRE QUANDO FOR CRIADO UM MODEL