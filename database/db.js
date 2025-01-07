const { Sequelize } = require('sequelize'); // Fixed typo in Sequelize
require('dotenv').config(); // Load environment variables from .env


const sequelize = new Sequelize(
    process.env.DB_NAME,     // Database name
    process.env.DB_USER,     // Username
    process.env.DB_PASSWORD, // Password
    {
        host: process.env.DB_HOST,   // Host
        dialect: process.env.DB_DIALECT, // Dialect
        port: process.env.DB_PORT,   // Port
        logging: false,
        define: {
            timestamps: false,
        },
    }
);

const testConnection= async()=>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testConnection();

module.exports = sequelize;
