const Sequelize = require("sequelize");


//conexão com mysql
const sequelize = new Sequelize('postapp','root','1F@miliasempre',{
    host:"localhost",
    dialect:"mysql",
}); 


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}