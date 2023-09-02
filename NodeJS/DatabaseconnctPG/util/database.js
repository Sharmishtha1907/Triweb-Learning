const sequelize = require('sequelize');

const seq=new sequelize("practicetriweb","root","",{
    dialect:"mysql",
    host:"localhost"
})

module.exports = seq; 