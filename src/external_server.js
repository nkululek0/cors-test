require("dotenv/config");
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({ origin: "http://localhost:8081" }));

app.get("/", async (req, res) => {
    res.status(200).json({
        message: "External api was called successfully"
    });
});

app.listen(process.env.EXTERNAL_SERVER_PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log(`Internal server running on port: ${ process.env.EXTERNAL_SERVER_PORT }`);
})