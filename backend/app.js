const express = require('express');
const morgan = require('morgan');
require ('dotenv').config();

require('./database/connection');

const app = express();
const cors = require('cors')

app.use(morgan('dev'));
app.use(cors())

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});