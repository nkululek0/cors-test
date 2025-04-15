require("dotenv/config");
const express = require("express");
const app = express();

const path = require("path");
app.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "/views/internal/index.html"));

    console.log("Internal api was called successfully");
});

app.listen(process.env.INTERNAL_SERVER_PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Internal server running on port: ${ process.env.INTERNAL_SERVER_PORT }`);
})