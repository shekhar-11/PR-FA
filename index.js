const express = require('express');
const cors = require('cors'); // <-- add this line

const app = express();
app.use(cors()); 
app.use(express.json());

let data = {}
app.post('/receive-data', (req, res) => {
    data = req.body;
    res.json({ "data":data
})});


app.get('/data', (req, res) => {
    
    res.json({ "data":data
})});



app.listen(5000)