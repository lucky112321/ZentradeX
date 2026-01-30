const { model } = require("mongoose");
const { HoldingsSchema } = require('../schemas/HoldingSchema');
const HoldingsModel = new model("Holding", HoldingsSchema, "holdings");
module.exports = { HoldingsModel };
