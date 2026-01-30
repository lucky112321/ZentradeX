require("dotenv").config();
const mongoose = require("mongoose");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

async function checkDB() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to DB");

        const holdings = await HoldingsModel.find({});
        console.log(`Holdings count: ${holdings.length}`);
        if (holdings.length > 0) console.log("Sample Holding:", holdings[0]);

        const positions = await PositionsModel.find({});
        console.log(`Positions count: ${positions.length}`);
        if (positions.length > 0) console.log("Sample Position:", positions[0]);

        const orders = await OrdersModel.find({});
        console.log(`Orders count: ${orders.length}`);

        await mongoose.disconnect();
    } catch (err) {
        console.error("Diagnostic error:", err);
    }
}

checkDB();
