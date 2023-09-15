const express = require("express");
const app =express();
const handlebars  = require("express-handlebars");
const Sequelize = require("sequelize");


//config
    //Tamplate engine
    app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }))
        app.set('view engine','handlebars');
    //conexão com mysql
        const sequelize = new Sequelize('livro','root','',{
            host:"localhost",
            dialect:"mysql",
        }); 

//rotas
app.get('/cad',(req,res) =>{
    res.render('formulario')
});

app.post('/add',(req,res) => {
    res.send('Formuladio recebido!..')
})



app.listen(8081,() => {
    console.log("Servidor rodando!..")
});