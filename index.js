const express = require('express');
const app = express();
const port = 3000;

app.use(express.json({ extended: false }));

// Routes
const test = require('./api/test');

app.use('/api/test', test);

// app.get('/', (req, res) => {
//     console.log('Yay it worked');
//     res.json({ text: 'Hello World!' });
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

