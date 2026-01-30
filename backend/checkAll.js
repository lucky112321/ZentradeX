require("dotenv").config();
const mongoose = require("mongoose");

async function checkAllCounts() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        const db = mongoose.connection.db;

        const cols = ['positions', 'holding ', 'users', 'position ', 'order ', 'holdings', 'orders'];

        for (const name of cols) {
            const count = await db.collection(name).countDocuments();
            console.log(`${name}: ${count}`);
        }

        await mongoose.disconnect();
    } catch (err) {
        console.error(err);
    }
}

checkAllCounts();
