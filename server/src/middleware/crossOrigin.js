const crossOrigin = (req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();

};

module.exports = crossOrigin;