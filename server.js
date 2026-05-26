// const app = require('./app');
// const port = 3000;
// const mongoose = require('mongoose');
// const dns = require('dns');

const app = require('./app')
const port = 300;
const mongoose = require ('mongoose');
const dns = require ('dns');

dns.setServers(['8.8.8.8', '1.1.1.1']);

const connectionString = 'mongodb+srv://prakash:prakash1234@cluster0.qgnaudj.mongodb.net/hotels?retryWrites=true&w=majority';

mongoose.connect(connectionString)
  .then(() => {
    console.log('Connected to database');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error('Database connection error:', err);
  });