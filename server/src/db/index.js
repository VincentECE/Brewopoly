const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/BrewLab';

mongoose.connect(url, {autoIndex: false}, () => {
  console.log('database connected!');
}, e => console.log('Error while connecting to database: ', e));