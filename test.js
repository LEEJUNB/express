const express = require('express');
const app = express();

app.get('/', (req,res) => res.send('Test'));
app.listen(3000,() => console.log('3000 port listen'));
