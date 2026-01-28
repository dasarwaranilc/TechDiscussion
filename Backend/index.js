const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port =3000;

app.use(bodyparser.json());

app.get('/',(req,res)=> {
    res.send('Hello Word!');

});

app.listen(port,() =>{
    console.log('server is running on http://localhost:${port}');

});
