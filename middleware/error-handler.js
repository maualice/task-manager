const errorHandlerMiddleware = (err, req, res, next) => {
  return res.status(500).json({ msg: 'Something went wrong, try later' }); //msg:err
};

module.exports = errorHandlerMiddleware;
