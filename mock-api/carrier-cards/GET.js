let carrierData = require('./carrier_cards.json') 
module.exports = (req, res) =>
  res.status(200).json(carrierData);