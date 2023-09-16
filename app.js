const express = require("express");
const app =express();
const handlebars  = require("express-handlebars");
const bodyParser = require('body-parser');
const Post = require('./models/Post') 


//config

    //Tamplate engine

        app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
        app.set('view engine','handlebars');


    // body parser

        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

//rotas

app.get('/', (req,res) => {

    Post.findAll().then((posts) =>{
        res.render('home',{nome: "weverson",sobrenome:"martins"})
    })
})

app.get('/cad',(req,res) =>{
    res.render('formulario')
});

app.post('/add',(req,res) => {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(() => {
        res.redirect('/')
    }).catch((error) => {
        res.send("Houve um problema  " + error)
    })

})



app.listen(8081,() => {
    console.log("Servidor rodando!..")
});