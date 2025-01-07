const express =require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sequelize = require('./database/db');

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) =>{
    res.send("welcome to webpage")
})

app.get('/notices', (req, res) =>{
    res.send("welcome to notice")
})
app.listen(PORT,()=>{
        console.log(`listening on port......${PORT}`);
});