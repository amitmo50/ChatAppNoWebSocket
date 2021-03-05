const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./routes/messageRoutes')(app);
const PORT = 4000;


app.listen(PORT, () => {
    console.log('Backend run on http://localhost:4000');
});