const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { port } = require('./config/environment');
const router = require('./server/router')
const cors = require('cors')

app.use(express.static(`${__dirname}/public`));

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', router)

app.get('/*', (req, res) => res.sendFile(`${__dirname}/public/index.html`));

app.listen(port, () => console.log(`Server is listening on port ${port}`))

module.exports = app;