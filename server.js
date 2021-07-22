const mongoose = require("mongoose");
const express = require("express");
const app = express();

const User = require("./models/User");

// DB Config
const db = "mongodb://localhost/Test17";
// Connect to MongoDB
mongoose
    .connect(
        db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));



const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));