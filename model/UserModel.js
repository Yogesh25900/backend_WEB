const {Datatypes} = require('sequelize');
const sequelize = require('sequelize');


export  const UserModel =  sequelize.define("test",{
    id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Datatypes.STRING,
        allowNull: false
    },
 
    email: {
        type: Datatypes.STRING
    }
 
})


