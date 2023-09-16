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

app.get('/', function(req,res){
    Post.findAll({order: [['id','DESC']]}).then(function(posts){
        res.render('home',{'posts': posts})
    })
})

app.get('/cad',function(req,res){
    res.render('formulario')
});

app.post('/add',function(req,res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(error){
        res.send("Houve um problema  " + error)
    })

})

app.get('/deletar/:id',function(req,res){
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.send('Resposta deletada com sucesso!')
    }).catch(function(error){
        res.send("Algo deu errado " + error)
    })
})



app.listen(8081,() => {
    console.log("Servidor rodando!..")
});