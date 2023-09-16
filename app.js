const express = require("express");
const app =express();
const handlebars  = require("express-handlebars");
const bodyParser = require('body-parser');
const Sequelize = require("sequelize");


//config

    //Tamplate engine

        app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
        app.set('view engine','handlebars');


    // body parser

        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())


    //conexão com mysql

        const sequelize = new Sequelize('livro','root','1F@miliasempre',{
            host:"localhost",
            dialect:"mysql",
        }); 

//rotas
app.get('/cad',(req,res) =>{
    res.render('formulario')
});

app.post('/add',(req,res) => {
    res.send('Seu nome:' + req.body.titulo + " e "+ req.body.conteudo)
})



app.listen(8081,() => {
    console.log("Servidor rodando!..")
});