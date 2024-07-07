const express = require('express');
const mongoose = require('mongoose');
const emailRoutes = require('./routes/emailRoutes');
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/emailScheduler', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get("/", async(req, res, next) => {
    res.status(200).send({message: "Server health is fine."});
})

app.use('/api', emailRoutes);

const PORT = process.env.PORT || 3000;

mongoose
    .connect(process.env.MONGO_URI, {
        dbName: process.env.DB_NAME,
    })
    .then(() => {
        console.log("Connected to database...");
        app.listen(PORT, () => {
            console.log(`App is started listening on port ${PORT}.`);
        });
    })
    .catch((err) => console.log("Error while connecting to database!", err));
