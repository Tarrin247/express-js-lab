const express = require('express');
let app = express();

app.use((req, res, next) => {
    console.log(req.url);

    next();
});

app.use(express.static('public'));

// app.get('/', (req, res) => {
//     res.send('Hello from the web server side...');
// });

app.listen(3000);