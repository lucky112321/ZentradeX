require("dotenv").config();
const mongoose = require("mongoose");

async function listCollections() {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected to DB");

        const collections = await mongoose.connection.db.listCollections().toArray();
        console.log("Collections:", collections.map(c => c.name));

        await mongoose.disconnect();
    } catch (err) {
        console.error("Diagnostic error:", err);
    }
}

listCollections();
