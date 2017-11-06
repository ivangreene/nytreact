require('dotenv').config();
const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.use(require('./routes')(express));

app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
