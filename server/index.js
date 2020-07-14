const express = require('express');
const app = express();
const bodyParser = require('body-parser');;
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const port = 5050;
//const resume = require('../client/dist/Kyle_Shelton.pdf')
//const dbHelpers = require('../db/dbHelpers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/resume', express.static(__dirname + '../client/dist/resume'))
// app.get('/resume', (req, res) => {
//   res.status(200).send(resume);
// })
app.listen(port, () => console.log(`LISTENING ON http://127.0.0.1:${port}`));

module.exports = app;