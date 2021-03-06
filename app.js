const express = require('express')
const morgan = require('morgan')
const html = require('html-template-tag')
// const index = require('./views')
const layout = require('./views/layout')
const app = express();

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(layout('hi'))
})



const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
