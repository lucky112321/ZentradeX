const { model } = require("mongoose");
const { OrdersSchema } = require('../schemas/OrdersSchema');
const OrdersModel = new model("Order", OrdersSchema, "orders");
module.exports = { OrdersModel };