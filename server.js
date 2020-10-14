const express = require('express');
const path = require ('path');
const app = express();
app.use(express.static(___dirname + '/dist/practice'));
app.get('/*', function(req,res) {
    res.sendFile(path.join(___dirname+
        '/dist/practice/index.html'));});
app.listen(process.env.PORT || 8080);