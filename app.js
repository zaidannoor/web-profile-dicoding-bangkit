const express = require('express');
const path = require('path');


const app = express()
let port = 6060 | null;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req,res) => {
    res.render('index')
})

app.listen(port, () => {
    console.log(`ezpress app listening at port ${port}`);
})