const notFound = (req, res) => res.status(404).send('Request not found');

module.exports = notFound;
