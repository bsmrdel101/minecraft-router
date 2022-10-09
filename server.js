const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
    console.log('Yay it worked');
    res.json({ text: 'Hello World!' });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
