const { Sequelize, DataTypes } = require('sequelize');

// Database connection setup
const sequelize = new Sequelize('test_demo', 'postgres', '12345', {
    host: 'localhost',
    dialect: 'postgres',
});

// Define User model with explicit table name and disabling timestamps
const User = sequelize.define('Tests', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
    },
}, {
    tableName: 'Tests',  // Explicitly specifying the table name
});

// Sync the database
sequelize.sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });

module.exports = User;