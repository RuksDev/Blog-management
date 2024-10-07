

const { default: mongoose, connect } = require("mongoose");

const connection = {};

export const connectToDb = async () => {
    try {
        if (connection.isconnected) {
            console.log("Using existing connection");
            return;
        }
        const db = await mongoose.connect(process.env.MONGO);
        connection.isconnected = db.connection.readyState;  // Corrected this line
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}
