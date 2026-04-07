const express = require("express")
const urlRoute = require("./routes/url")
const URL = require("./models/url")
const connect_to_db = require("./connect")

const app = express();
const PORT = 5050;

connect_to_db("mongodb://localhost:27017/url-shortner").then(() => {
    console.log("Database connected")
})

app.use(express.json());
app.use('/url', urlRoute);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitedHistory: {
                    timestamp: Date.now(),
                },
            },
        }
    );
    res.redirect(entry.redirectURL);
})