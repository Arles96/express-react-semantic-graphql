const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// static files
app.use(express.static(path.join(__dirname, '../public')))

// routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})

// starting server
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`)
});